import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export function FAQSection() {
  const faqs = [
    {
      question: "Implant có đau không? Quy trình thực hiện như thế nào?",
      answer: "Quy trình cấy ghép implant được thực hiện dưới gây tê cục bộ hoàn toàn không đau. Sau khi gây tê, bác sĩ sẽ tạo một lỗ nhỏ trên xương hàm để đặt trụ implant titanium. Toàn bộ quá trình diễn ra trong 30-45 phút. Sau phẫu thuật, bạn có thể cảm thấy hơi khó chịu nhẹ, nhưng có thể kiểm soát bằng thuốc giảm đau thông thường."
    },
    {
      question: "Niềng răng mất bao lâu? Chi phí bao nhiêu?",
      answer: "Thời gian niềng răng thường từ 12-24 tháng tùy thuộc vào tình trạng răng. Niềng răng mắc cài kim loại từ 15-25 triệu, mắc cài sứ từ 25-35 triệu, niềng trong suốt Invisalign từ 40-80 triệu. Chúng tôi hỗ trợ trả góp 0% lãi suất để giúp bạn dễ dàng chi trả."
    },
    {
      question: "Răng sứ có bền không? Bảo hành bao lâu?",
      answer: "Răng sứ chất lượng cao như Emax, Cercon có thể sử dụng từ 15-20 năm nếu được chăm sóc đúng cách. Chúng tôi bảo hành răng sứ từ 5-10 năm tùy loại sứ. Trong thời gian bảo hành, nếu răng sứ bị vỡ, nứt do lỗi kỹ thuật, chúng tôi sẽ làm lại miễn phí."
    },
    {
      question: "Tẩy trắng răng có hại cho men răng không?",
      answer: "Tẩy trắng răng bằng công nghệ Laser Whitening hoàn toàn an toàn với men răng khi thực hiện đúng quy trình. Gel tẩy trắng chỉ tác động lên các phân tử màu bên trong răng mà không làm hại cấu trúc men răng. Sau tẩy trắng, răng có thể hơi nhạy cảm 1-2 ngày nhưng sẽ trở lại bình thường."
    },
    {
      question: "Phòng khám có hỗ trợ trả góp không?",
      answer: "Có, chúng tôi hỗ trợ trả góp 0% lãi suất qua thẻ tín dụng cho tất cả dịch vụ. Bạn có thể trả góp 6-24 tháng tùy thuộc vào giá trị điều trị. Ngoài ra, chúng tôi còn có các chương trình ưu đãi đặc biệt cho khách hàng thân thiết và giới thiệu bạn bè."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Câu Hỏi Thường Gặp</h2>
          <p className="text-xl text-gray-600">Những thắc mắc phổ biến về dịch vụ nha khoa</p>
        </div>
        
        <Card className="p-6">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  );
}
