import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Star } from "lucide-react";
import type { Doctor } from "@shared/schema";

export function DoctorsSection() {
  const { data: doctors, isLoading, error } = useQuery<Doctor[]>({
    queryKey: ['/api/doctors'],
  });

  if (error) {
    return (
      <section id="doctors" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-600">Không thể tải thông tin bác sĩ. Vui lòng thử lại sau.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="doctors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Đội Ngũ Bác Sĩ</h2>
          <p className="text-xl text-gray-600">Những chuyên gia hàng đầu với nhiều năm kinh nghiệm và chuyên môn sâu</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading skeletons
            Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all">
                <Skeleton className="w-full h-64" />
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2 mb-3" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Skeleton key={i} className="w-4 h-4" />
                      ))}
                    </div>
                    <Skeleton className="h-8 w-20" />
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            doctors?.map((doctor) => (
              <Card key={doctor.id} className="overflow-hidden hover:shadow-xl transition-all">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-64 object-cover" 
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{doctor.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{doctor.specialty}</p>
                  <p className="text-gray-600 text-sm mb-4">{doctor.experience}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star 
                          key={index} 
                          className="w-4 h-4 fill-yellow-400 text-yellow-400" 
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">{doctor.rating}</span>
                    </div>
                    <Button variant="link" className="text-blue-600 hover:text-blue-700 font-medium p-0">
                      Xem chi tiết
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
