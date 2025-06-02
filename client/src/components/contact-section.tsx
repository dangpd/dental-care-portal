import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function ContactSection() {
  const clinicInfo = {
    address: "123 Đường Láng, Đống Đa, Hà Nội",
    phone: "024 3855 1234",
    hotline: "0987 654 321",
    email: "info@dentalcare.vn"
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Liên Hệ & Địa Chỉ</h2>
          <p className="text-xl text-gray-600">Hãy liên hệ với chúng tôi để được tư vấn miễn phí</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900">Thông Tin Liên Hệ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white p-3 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Địa chỉ</h4>
                    <p className="text-gray-600">{clinicInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 text-white p-3 rounded-lg">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Điện thoại</h4>
                    <p className="text-gray-600">{clinicInfo.phone}</p>
                    <p className="text-gray-600">Hotline: {clinicInfo.hotline}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 text-white p-3 rounded-lg">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">{clinicInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 text-white p-3 rounded-lg">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Giờ làm việc</h4>
                    <p className="text-gray-600">Thứ 2 - Thứ 7: 8:00 - 20:00</p>
                    <p className="text-gray-600">Chủ nhật: 8:00 - 17:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900">Kết Nối Với Chúng Tôi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button size="icon" className="bg-blue-600 hover:bg-blue-700">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button size="icon" className="bg-blue-400 hover:bg-blue-500">
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button size="icon" className="bg-pink-500 hover:bg-pink-600">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button size="icon" className="bg-red-600 hover:bg-red-700">
                    <Youtube className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardContent className="p-0">
              <div className="h-96 bg-gray-200 flex items-center justify-center rounded-lg">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">Bản đồ tương tác</p>
                  <p className="text-sm text-gray-500">Nhấn để xem chỉ đường</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
