import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock } from "lucide-react";
import { insertAppointmentSchema, type InsertAppointment } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export function AppointmentForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm<InsertAppointment>({
    resolver: zodResolver(insertAppointmentSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      service: "",
      preferredDate: "",
      preferredTime: "",
      notes: ""
    }
  });

  const createAppointmentMutation = useMutation({
    mutationFn: async (data: InsertAppointment) => {
      const response = await apiRequest("POST", "/api/appointments", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Đặt lịch thành công!",
        description: "Chúng tôi sẽ liên hệ xác nhận lịch hẹn trong vòng 30 phút.",
      });
      reset();
      queryClient.invalidateQueries({ queryKey: ['/api/appointments'] });
    },
    onError: (error: any) => {
      toast({
        title: "Đặt lịch thất bại",
        description: error.message || "Có lỗi xảy ra. Vui lòng thử lại.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: InsertAppointment) => {
    setIsSubmitting(true);
    try {
      await createAppointmentMutation.mutateAsync(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    { value: "tay-trang-rang", label: "Tẩy trắng răng" },
    { value: "nieng-rang", label: "Niềng răng" },
    { value: "cay-ghep-implant", label: "Cấy ghép Implant" },
    { value: "boc-rang-su", label: "Bọc răng sứ" },
    { value: "dieu-tri-tuy", label: "Điều trị tủy" },
    { value: "nha-khoa-tre-em", label: "Nha khoa trẻ em" }
  ];

  const timeSlots = [
    "08:00", "09:00", "10:00", "11:00", 
    "14:00", "15:00", "16:00", "17:00", "19:00"
  ];

  return (
    <section id="appointment" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Đặt Lịch Hẹn Nhanh</h2>
          <p className="text-xl text-gray-600">Chỉ cần 30 giây để đặt lịch hẹn tư vấn miễn phí</p>
        </div>
        
        <Card className="bg-gray-50">
          <CardHeader>
            <CardTitle className="text-center">Thông tin đặt lịch</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-2">
                  Họ và tên *
                </Label>
                <Input
                  id="fullName"
                  {...register("fullName")}
                  placeholder="Nhập họ và tên"
                  className={errors.fullName ? "border-red-500" : ""}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2">
                  Số điện thoại *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  placeholder="Nhập số điện thoại"
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="Nhập địa chỉ email"
                />
              </div>
              
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2">
                  Dịch vụ quan tâm
                </Label>
                <Select onValueChange={(value) => setValue("service", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn dịch vụ" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="preferredDate" className="text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="inline w-4 h-4 mr-1" />
                  Ngày mong muốn
                </Label>
                <Input
                  id="preferredDate"
                  type="date"
                  {...register("preferredDate")}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2">
                  <Clock className="inline w-4 h-4 mr-1" />
                  Giờ mong muốn
                </Label>
                <Select onValueChange={(value) => setValue("preferredTime", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn giờ" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="md:col-span-2">
                <Label htmlFor="notes" className="text-sm font-medium text-gray-700 mb-2">
                  Ghi chú
                </Label>
                <Textarea
                  id="notes"
                  {...register("notes")}
                  rows={4}
                  placeholder="Mô tả tình trạng răng miệng hoặc ghi chú thêm"
                />
              </div>
              
              <div className="md:col-span-2">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  {isSubmitting ? "Đang đặt lịch..." : "Đặt lịch hẹn ngay"}
                </Button>
                <p className="text-sm text-gray-500 text-center mt-4">
                  * Chúng tôi sẽ liên hệ xác nhận lịch hẹn trong vòng 30 phút
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
