"use client"

import { useState } from "react"
import { Menu, X, Star, MapPin, Phone, Mail, ChevronRight } from "lucide-react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-serif font-bold text-primary">Hotel Sói Cô Độc</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <a href="#home" className="hover:text-primary transition">
                Trang chủ
              </a>
              <a href="#rooms" className="hover:text-primary transition">
                Phòng
              </a>
              <a href="#services" className="hover:text-primary transition">
                Dịch vụ
              </a>
              <a href="#about" className="hover:text-primary transition">
                Về chúng tôi
              </a>
              <a href="#contact" className="hover:text-primary transition">
                Liên hệ
              </a>
            </div>

            <button className="hidden md:block bg-primary text-primary-foreground px-6 py-2 rounded hover:opacity-90 transition">
              Đặt phòng
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a href="#home" className="block py-2 hover:text-primary">
                Trang chủ
              </a>
              <a href="#rooms" className="block py-2 hover:text-primary">
                Phòng
              </a>
              <a href="#services" className="block py-2 hover:text-primary">
                Dịch vụ
              </a>
              <a href="#about" className="block py-2 hover:text-primary">
                Về chúng tôi
              </a>
              <a href="#contact" className="block py-2 hover:text-primary">
                Liên hệ
              </a>
              <button className="w-full bg-primary text-primary-foreground px-6 py-2 rounded hover:opacity-90 transition mt-2">
                Đặt phòng
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-balance">Hotel Sói Cô Độc 5 Sao</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Trải nghiệm sang trọng và tinh tế tại khách sạn hàng đầu với dịch vụ đẳng cấp thế giới
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded text-lg hover:opacity-90 transition">
              Đặt phòng ngay
            </button>
            <button className="border border-primary text-primary px-8 py-3 rounded text-lg hover:bg-primary hover:text-primary-foreground transition">
              Tìm hiểu thêm
            </button>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <img
            src="/luxury-hotel-lobby-with-elegant-design.jpg"
            alt="Hotel Sói Cô Độc"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">Về Hotel Sói Cô Độc</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Hotel Sói Cô Độc là biểu tượng của sang trọng và tinh tế, nằm tại vị trí chiến lược với tầm nhìn tuyệt
                đẹp. Với hơn 20 năm kinh nghiệm, chúng tôi cam kết mang đến trải nghiệm tuyệt vời cho mỗi vị khách.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Mỗi chi tiết được thiết kế với tỉ mỉ, từ kiến trúc hiện đại đến dịch vụ chuyên nghiệp, tạo nên một không
                gian hoàn hảo cho kỳ nghỉ của bạn.
              </p>
              <div className="flex items-center gap-2 text-primary">
                <Star size={20} className="fill-primary" />
                <span className="font-semibold">Được công nhận 5 sao quốc tế</span>
              </div>
            </div>
            <img
              src="/luxury-hotel-room.png"
              alt="Phòng khách sạn"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">Các Loại Phòng</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Phòng Tiêu Chuẩn", price: "2.500.000đ", desc: "Phòng thoải mái với view thành phố" },
              { name: "Phòng Deluxe", price: "4.500.000đ", desc: "Phòng rộng rãi với tiện nghi cao cấp" },
              { name: "Suite Tổng Thống", price: "8.500.000đ", desc: "Phòng sang trọng nhất với dịch vụ VIP" },
            ].map((room, idx) => (
              <div key={idx} className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition">
                <img
                  src={`/luxury-hotel.png?height=250&width=400&query=luxury%20hotel%20${room.name}`}
                  alt={room.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2">{room.name}</h3>
                  <p className="text-muted-foreground mb-4">{room.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold text-lg">{room.price}/đêm</span>
                    <button className="text-primary hover:text-primary/80 transition flex items-center gap-1">
                      Chi tiết <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">Dịch Vụ Tiêu Biểu</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🍽️", title: "Nhà Hàng 5 Sao", desc: "Ẩm thực quốc tế hạng nhất" },
              { icon: "🏊", title: "Hồ Bơi Vô Cực", desc: "Tầng 20 với view panorama" },
              { icon: "💆", title: "Spa & Wellness", desc: "Thư giãn toàn thân chuyên nghiệp" },
              { icon: "🎰", title: "Phòng Họp", desc: "Tiện nghi cho sự kiện" },
            ].map((service, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">Liên Hệ Với Chúng Tôi</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-bold mb-2">Địa Chỉ</h3>
              <p className="text-muted-foreground">123 Đường Lê Lợi, Quận 1, TP.HCM</p>
            </div>
            <div className="text-center">
              <Phone className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-bold mb-2">Điện Thoại</h3>
              <p className="text-muted-foreground">+84 28 3822 8888</p>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-muted-foreground">info@abchotel.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-muted p-8 rounded-lg">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Họ và tên"
                  className="w-full px-4 py-2 border border-border rounded bg-background"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-border rounded bg-background"
                />
              </div>
              <input
                type="text"
                placeholder="Chủ đề"
                className="w-full px-4 py-2 border border-border rounded bg-background"
              />
              <textarea
                placeholder="Tin nhắn của bạn"
                rows={5}
                className="w-full px-4 py-2 border border-border rounded bg-background"
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded font-bold hover:opacity-90 transition"
              >
                Gửi Tin Nhắn
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">Hotel Sói Cô Độc</h3>
              <p className="opacity-90">Khách sạn 5 sao hàng đầu tại thành phố</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Về Chúng Tôi</h4>
              <ul className="space-y-2 opacity-90">
                <li>
                  <a href="#" className="hover:opacity-100">
                    Lịch sử
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100">
                    Đội ngũ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100">
                    Tin tức
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Dịch Vụ</h4>
              <ul className="space-y-2 opacity-90">
                <li>
                  <a href="#" className="hover:opacity-100">
                    Phòng
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100">
                    Nhà hàng
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100">
                    Spa
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Theo Dõi</h4>
              <ul className="space-y-2 opacity-90">
                <li>
                  <a href="#" className="hover:opacity-100">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center opacity-90">
            <p>&copy; 2025 Hotel Sói Cô Độc. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
