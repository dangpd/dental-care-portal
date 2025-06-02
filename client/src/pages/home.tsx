import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { DoctorsSection } from "@/components/doctors-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { AppointmentForm } from "@/components/appointment-form";
import { GallerySection } from "@/components/gallery-section";
import { FAQSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { Button } from "@/components/ui/button";
import { Calendar, Shield, Clock, DollarSign, ThumbsUp, Award, Microscope, Heart } from "lucide-react";

export default function Home() {
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation onAppointmentClick={scrollToAppointment} />
      
      <HeroSection onAppointmentClick={scrollToAppointment} />
      
      {/* Clinic Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Giới Thiệu Phòng Khám</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Với hơn 15 năm kinh nghiệm, chúng tôi tự hào là một trong những phòng khám nha khoa 
              uy tín hàng đầu, luôn đặt sức khỏe và sự hài lòng của khách hàng lên hàng đầu.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Advanced dental equipment" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 text-white p-3 rounded-lg">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Chứng Nhận Quốc Tế</h3>
                  <p className="text-gray-600">Được công nhận bởi các tổ chức nha khoa uy tín trong nước và quốc tế.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-500 text-white p-3 rounded-lg">
                  <Microscope className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Công Nghệ Tiên Tiến</h3>
                  <p className="text-gray-600">Trang bị thiết bị y tế hiện đại nhất, đảm bảo điều trị hiệu quả và an toàn.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 text-white p-3 rounded-lg">
                  <Heart className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Chăm Sóc Tận Tâm</h3>
                  <p className="text-gray-600">Đội ngũ y bác sĩ giàu kinh nghiệm, luôn đồng hành cùng khách hàng.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tại Sao Chọn Chúng Tôi?</h2>
            <p className="text-xl text-gray-600">Những lý do khiến khách hàng tin tưởng và lựa chọn dịch vụ của chúng tôi</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bảo Hành Dài Hạn</h3>
              <p className="text-gray-600">Cam kết bảo hành lên đến 10 năm cho các dịch vụ implant và răng sứ cao cấp.</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Thời Gian Linh Hoạt</h3>
              <p className="text-gray-600">Mở cửa từ 8:00-20:00 tất cả các ngày trong tuần, kể cả cuối tuần và lễ tết.</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <DollarSign className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Giá Cả Hợp Lý</h3>
              <p className="text-gray-600">Chính sách giá minh bạch, nhiều gói ưu đãi và hỗ trợ trả góp 0% lãi suất.</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <ThumbsUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hài Lòng 100%</h3>
              <p className="text-gray-600">Cam kết điều trị lại miễn phí nếu khách hàng không hài lòng với kết quả.</p>
            </div>
          </div>
        </div>
      </section>

      <DoctorsSection />
      <TestimonialsSection />
      <AppointmentForm />
      <GallerySection />
      <FAQSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <i className="fas fa-tooth text-blue-500 text-2xl mr-2"></i>
                <span className="text-xl font-bold">Dental Care</span>
              </div>
              <p className="text-gray-400 mb-6">
                Phòng khám nha khoa uy tín với đội ngũ bác sĩ giàu kinh nghiệm và công nghệ tiên tiến.
              </p>
              <div className="flex space-x-4">
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook-f"></i>
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                  <i className="fab fa-youtube"></i>
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Dịch Vụ</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Tẩy trắng răng</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Niềng răng thẩm mỹ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cấy ghép Implant</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bọc răng sứ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Điều trị tủy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Nha khoa trẻ em</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Thông Tin</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Giới thiệu</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Đội ngũ bác sĩ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tin tức</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Khuyến mãi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tuyển dụng</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Liên hệ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Chính Sách</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo hành</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hướng dẫn thanh toán</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Câu hỏi thường gặp</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dental Care. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <Button
        onClick={scrollToAppointment}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all"
        size="icon"
      >
        <Calendar className="h-6 w-6" />
      </Button>
    </div>
  );
}
