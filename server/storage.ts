import { 
  appointments, 
  services, 
  doctors, 
  testimonials,
  users,
  type Appointment, 
  type InsertAppointment,
  type Service,
  type InsertService,
  type Doctor,
  type InsertDoctor,
  type Testimonial,
  type InsertTestimonial,
  type User,
  type UpsertUser
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // User operations for authentication
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  
  // Appointments
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  getAppointments(): Promise<Appointment[]>;
  
  // Services
  getServices(): Promise<Service[]>;
  createService(service: InsertService): Promise<Service>;
  
  // Doctors
  getDoctors(): Promise<Doctor[]>;
  createDoctor(doctor: InsertDoctor): Promise<Doctor>;
  
  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class DatabaseStorage implements IStorage {
  // User operations for authentication
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    const [appointment] = await db
      .insert(appointments)
      .values({
        ...insertAppointment,
        email: insertAppointment.email || null,
        service: insertAppointment.service || null,
        preferredDate: insertAppointment.preferredDate || null,
        preferredTime: insertAppointment.preferredTime || null,
        notes: insertAppointment.notes || null,
      })
      .returning();
    return appointment;
  }

  async getAppointments(): Promise<Appointment[]> {
    return await db.select().from(appointments);
  }

  async createService(insertService: InsertService): Promise<Service> {
    const [service] = await db
      .insert(services)
      .values(insertService)
      .returning();
    return service;
  }

  async getServices(): Promise<Service[]> {
    return await db.select().from(services);
  }

  async createDoctor(insertDoctor: InsertDoctor): Promise<Doctor> {
    const [doctor] = await db
      .insert(doctors)
      .values({
        ...insertDoctor,
        rating: insertDoctor.rating || "5.0",
        bio: insertDoctor.bio || null,
      })
      .returning();
    return doctor;
  }

  async getDoctors(): Promise<Doctor[]> {
    return await db.select().from(doctors);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const [testimonial] = await db
      .insert(testimonials)
      .values({
        ...insertTestimonial,
        rating: insertTestimonial.rating || 5,
      })
      .returning();
    return testimonial;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials);
  }
}

export class MemStorage implements IStorage {
  private appointments: Map<number, Appointment>;
  private services: Map<number, Service>;
  private doctors: Map<number, Doctor>;
  private testimonials: Map<number, Testimonial>;
  private currentAppointmentId: number;
  private currentServiceId: number;
  private currentDoctorId: number;
  private currentTestimonialId: number;

  constructor() {
    this.appointments = new Map();
    this.services = new Map();
    this.doctors = new Map();
    this.testimonials = new Map();
    this.currentAppointmentId = 1;
    this.currentServiceId = 1;
    this.currentDoctorId = 1;
    this.currentTestimonialId = 1;

    // Initialize with default data
    this.initializeDefaultData();
  }

  // Stub methods for authentication (not used in memory storage)
  async getUser(id: string): Promise<User | undefined> {
    return undefined;
  }

  async upsertUser(user: UpsertUser): Promise<User> {
    throw new Error("User operations not supported in memory storage");
  }

  private async initializeDefaultData() {
    // Default services
    const defaultServices: InsertService[] = [
      {
        name: "Tẩy Trắng Răng",
        description: "Công nghệ tẩy trắng hiện đại, an toàn, giúp răng trắng sáng tự nhiên chỉ trong 1 giờ.",
        price: "Từ 2.000.000đ",
        icon: "fas fa-tooth",
        category: "thẩm mỹ"
      },
      {
        name: "Niềng Răng Thẩm Mỹ",
        description: "Niềng răng trong suốt Invisalign, mắc cài sứ cao cấp cho nụ cười hoàn hảo.",
        price: "Từ 15.000.000đ",
        icon: "fas fa-teeth",
        category: "chỉnh nha"
      },
      {
        name: "Cấy Ghép Implant",
        description: "Công nghệ cấy ghép implant tiên tiến, khôi phục răng như thật, bền vững suốt đời.",
        price: "Từ 20.000.000đ",
        icon: "fas fa-teeth-open",
        category: "phẫu thuật"
      },
      {
        name: "Bọc Răng Sứ",
        description: "Răng sứ Cercon, Emax cao cấp, thẩm mỹ hoàn hảo, bảo hành lâu dài.",
        price: "Từ 3.500.000đ",
        icon: "fas fa-tooth",
        category: "thẩm mỹ"
      },
      {
        name: "Điều Trị Tủy",
        description: "Điều trị tủy răng hiện đại, không đau, bảo tồn tối đa răng thật.",
        price: "Từ 1.500.000đ",
        icon: "fas fa-user-md",
        category: "điều trị"
      },
      {
        name: "Nha Khoa Trẻ Em",
        description: "Chăm sóc răng miệng cho trẻ em với phương pháp nhẹ nhàng, thân thiện.",
        price: "Từ 200.000đ",
        icon: "fas fa-child",
        category: "trẻ em"
      }
    ];

    // Default doctors
    const defaultDoctors: InsertDoctor[] = [
      {
        name: "BS. Nguyễn Văn An",
        specialty: "Chuyên khoa Implant & Phẫu thuật",
        experience: "15 năm kinh nghiệm, Thạc sĩ Nha khoa - Đại học Y Hà Nội",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
        rating: "5.0",
        bio: "Bác sĩ chuyên về cấy ghép implant và phẫu thuật nha khoa với hơn 15 năm kinh nghiệm."
      },
      {
        name: "BS. Trần Thị Mai",
        specialty: "Chuyên khoa Thẩm mỹ & Niềng răng",
        experience: "12 năm kinh nghiệm, Chứng chỉ Invisalign Diamond Provider",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
        rating: "4.9",
        bio: "Chuyên gia niềng răng thẩm mỹ với chứng chỉ Invisalign Diamond Provider."
      },
      {
        name: "GS.TS. Lê Văn Phúc",
        specialty: "Trưởng khoa Nha khoa",
        experience: "25 năm kinh nghiệm, Giáo sư - Tiến sĩ Nha khoa",
        image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
        rating: "5.0",
        bio: "Giáo sư, Tiến sĩ với 25 năm kinh nghiệm trong lĩnh vực nha khoa."
      }
    ];

    // Default testimonials
    const defaultTestimonials: InsertTestimonial[] = [
      {
        name: "Anh Minh Tuấn",
        service: "Dịch vụ Cấy ghép Implant",
        content: "Tôi rất hài lòng với dịch vụ cấy ghép implant tại đây. Bác sĩ tư vấn rất tận tình và kỹ thuật thực hiện chuyên nghiệp. Sau 6 tháng, răng implant của tôi rất chắc khỏe như răng thật.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
        rating: 5
      },
      {
        name: "Chị Lan Anh",
        service: "Dịch vụ Niềng răng Invisalign",
        content: "Niềng răng trong suốt Invisalign tại đây thật sự tuyệt vời. Tôi có thể tháo ra khi ăn uống và vệ sinh rất dễ dàng. Sau 18 tháng, răng tôi đã thẳng và đều đẹp.",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b172?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
        rating: 5
      },
      {
        name: "Anh Đức Thành",
        service: "Dịch vụ Bọc răng sứ",
        content: "Bọc răng sứ Emax ở đây rất đẹp và tự nhiên. Màu sắc hoàn toàn giống răng thật, không ai nhận ra tôi đã làm răng sứ. Cảm ơn đội ngũ bác sĩ nhiều!",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
        rating: 5
      }
    ];

    // Initialize services
    for (const service of defaultServices) {
      await this.createService(service);
    }

    // Initialize doctors
    for (const doctor of defaultDoctors) {
      await this.createDoctor(doctor);
    }

    // Initialize testimonials
    for (const testimonial of defaultTestimonials) {
      await this.createTestimonial(testimonial);
    }
  }

  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    const id = this.currentAppointmentId++;
    const appointment: Appointment = { 
      ...insertAppointment,
      email: insertAppointment.email || null,
      service: insertAppointment.service || null,
      preferredDate: insertAppointment.preferredDate || null,
      preferredTime: insertAppointment.preferredTime || null,
      notes: insertAppointment.notes || null,
      id, 
      status: "pending",
      createdAt: new Date()
    };
    this.appointments.set(id, appointment);
    return appointment;
  }

  async getAppointments(): Promise<Appointment[]> {
    return Array.from(this.appointments.values());
  }

  async createService(insertService: InsertService): Promise<Service> {
    const id = this.currentServiceId++;
    const service: Service = { ...insertService, id };
    this.services.set(id, service);
    return service;
  }

  async getServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }

  async createDoctor(insertDoctor: InsertDoctor): Promise<Doctor> {
    const id = this.currentDoctorId++;
    const doctor: Doctor = { 
      ...insertDoctor, 
      id,
      rating: insertDoctor.rating || "5.0",
      bio: insertDoctor.bio || null
    };
    this.doctors.set(id, doctor);
    return doctor;
  }

  async getDoctors(): Promise<Doctor[]> {
    return Array.from(this.doctors.values());
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const testimonial: Testimonial = { 
      ...insertTestimonial, 
      id,
      rating: insertTestimonial.rating || 5
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }
}

export const storage = new DatabaseStorage();
