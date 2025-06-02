import { Button } from "@/components/ui/button";
import { Calendar, ArrowDown } from "lucide-react";

interface HeroSectionProps {
  onAppointmentClick: () => void;
}

export function HeroSection({ onAppointmentClick }: HeroSectionProps) {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Nụ Cười Tự Tin <br />
              <span className="text-yellow-400">Khởi Đầu Từ Đây</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Chuyên gia nha khoa hàng đầu với công nghệ hiện đại và dịch vụ tận tâm. 
              Mang đến cho bạn nụ cười hoàn hảo và sức khỏe răng miệng tối ưu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={onAppointmentClick}
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Đặt lịch ngay
              </Button>
              <Button 
                variant="outline"
                onClick={scrollToServices}
                className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
              >
                Tìm hiểu thêm
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">15+</div>
                <div className="text-blue-200">Năm kinh nghiệm</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">5000+</div>
                <div className="text-blue-200">Khách hàng hài lòng</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">50+</div>
                <div className="text-blue-200">Giải thưởng</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern dental clinic interior" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
