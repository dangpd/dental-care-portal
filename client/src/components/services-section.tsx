import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import type { Service } from "@shared/schema";

export function ServicesSection() {
  const { data: services, isLoading, error } = useQuery<Service[]>({
    queryKey: ['/api/services'],
  });

  const getIconClass = (iconName: string) => {
    const iconMap: { [key: string]: string } = {
      'fas fa-tooth': '🦷',
      'fas fa-teeth': '🦷',
      'fas fa-teeth-open': '🦷',
      'fas fa-user-md': '👨‍⚕️',
      'fas fa-child': '👶'
    };
    return iconMap[iconName] || '🦷';
  };

  const getCardColor = (index: number) => {
    const colors = [
      'bg-blue-500',
      'bg-green-500', 
      'bg-yellow-500',
      'bg-purple-500',
      'bg-pink-500',
      'bg-indigo-500'
    ];
    return colors[index % colors.length];
  };

  if (error) {
    return (
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-600">Không thể tải dịch vụ. Vui lòng thử lại sau.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Dịch Vụ Chuyên Nghiệp</h2>
          <p className="text-xl text-gray-600">Cung cấp đầy đủ các dịch vụ nha khoa từ cơ bản đến chuyên sâu</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading skeletons
            Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} className="hover:shadow-xl transition-all transform hover:-translate-y-2">
                <CardHeader>
                  <Skeleton className="w-16 h-16 rounded-xl" />
                  <Skeleton className="h-6 w-3/4" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3 mb-6" />
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-8 w-20" />
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            services?.map((service, index) => (
              <Card key={service.id} className="hover:shadow-xl transition-all transform hover:-translate-y-2">
                <CardHeader>
                  <div className={`${getCardColor(index)} text-white p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 text-2xl`}>
                    {getIconClass(service.icon)}
                  </div>
                  <CardTitle className="text-2xl font-semibold text-gray-900 mb-4">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-semibold text-lg">{service.price}</span>
                    <Button variant="link" className="text-blue-600 hover:text-blue-700 font-medium p-0">
                      Xem chi tiết →
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
