import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight, Users, Truck, Shield, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TownTeamLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b-2 border-charcoal bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-charcoal rounded-sm transform rotate-12"></div>
              <span className="text-2xl font-black text-charcoal tracking-tight">TOWN TEAM</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-charcoal font-bold hover:text-brick-red transition-colors">
                SHOP
              </Link>
              <Link href="#" className="text-charcoal font-bold hover:text-brick-red transition-colors">
                STYLE
              </Link>
              <Link href="#" className="text-charcoal font-bold hover:text-brick-red transition-colors">
                ABOUT
              </Link>
              <Link href="#" className="text-charcoal font-bold hover:text-brick-red transition-colors">
                CONTACT
              </Link>
            </div>
            <Button className="bg-charcoal text-white hover:bg-brick-red font-bold px-6 transform hover:rotate-1 transition-all">
              SHOP NOW
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-concrete-gray to-sand-beige py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-brick-red text-white font-bold px-4 py-2 transform -rotate-2">
                  NEW COLLECTION
                </Badge>
                <h1 className="text-5xl md:text-7xl font-black text-charcoal leading-tight transform -rotate-1">
                  STYLE THAT
                  <br />
                  <span className="text-brick-red">MOVES</span>
                  <br />
                  WITH YOU
                </h1>
                <p className="text-xl text-charcoal font-medium max-w-md">
                  Urban fashion for the modern Egyptian man. Bold, confident, and street-smart.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-charcoal text-white hover:bg-brick-red font-bold px-8 py-4 text-lg transform hover:rotate-1 transition-all"
                >
                  DISCOVER THE LOOK
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white font-bold px-8 py-4 text-lg transform hover:-rotate-1 transition-all bg-transparent"
                >
                  WATCH STORY
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-denim-blue rounded-3xl transform rotate-3 opacity-20"></div>
              <Image
                src="/egyptian-man-urban-sketch.png"
                alt="Town Team Hero"
                width={500}
                height={600}
                className="relative z-10 w-full h-auto rounded-3xl transform -rotate-2 shadow-2xl"
              />
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-16 h-16 border-4 border-brick-red rounded-full transform rotate-45 opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-denim-blue transform rotate-12 opacity-40"></div>
      </section>

      {/* Featured Outfits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-charcoal mb-4 transform -rotate-1">FEATURED LOOKS</h2>
            <div className="w-24 h-1 bg-brick-red mx-auto transform rotate-2"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "URBAN WARRIOR", price: "EGP 1,200", category: "JACKET" },
              { name: "STREET KING", price: "EGP 800", category: "SHIRT" },
              { name: "CITY WALKER", price: "EGP 950", category: "JEANS" },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-2 border-charcoal transform hover:rotate-1 hover:scale-105 transition-all duration-300 bg-concrete-gray"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={`/hand-drawn-sketch.png?height=400&width=300&query=hand-drawn sketch style ${item.category.toLowerCase()} fashion item for men urban streetwear`}
                      alt={item.name}
                      width={300}
                      height={400}
                      className="w-full h-80 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-brick-red text-white font-bold transform -rotate-12">
                      {item.category}
                    </Badge>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-black text-charcoal">{item.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-brick-red">{item.price}</span>
                      <Button className="bg-charcoal text-white hover:bg-denim-blue font-bold transform hover:rotate-2 transition-all">
                        ADD TO CART
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Town Team */}
      <section className="py-20 bg-sand-beige">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-charcoal transform -rotate-1">
                  THE TOWN TEAM
                  <br />
                  <span className="text-denim-blue">STORY</span>
                </h2>
                <div className="w-20 h-1 bg-brick-red transform rotate-3"></div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brick-red rounded-full flex items-center justify-center transform rotate-12">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">BORN IN CAIRO</h3>
                    <p className="text-charcoal">
                      Founded in the heart of Egypt, inspired by the energy of urban streets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-denim-blue rounded-full flex items-center justify-center transform -rotate-12">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">STREET SMART DESIGN</h3>
                    <p className="text-charcoal">Every piece crafted for the modern Egyptian man who owns his style.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brick-red rounded-full flex items-center justify-center transform rotate-6">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">QUALITY FIRST</h3>
                    <p className="text-charcoal">Premium materials meet urban aesthetics for lasting style.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-charcoal rounded-3xl transform -rotate-3 opacity-20"></div>
              <Image
                src="/egyptian-urban-fashion-sketch.png"
                alt="Town Team Story"
                width={400}
                height={500}
                className="relative z-10 w-full h-auto rounded-3xl transform rotate-2 shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Looks */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-charcoal mb-4 transform rotate-1">STREET STYLE</h2>
            <p className="text-xl text-charcoal max-w-2xl mx-auto">
              Real customers, real style. See how Town Team moves with you.
            </p>
            <div className="w-24 h-1 bg-denim-blue mx-auto mt-4 transform -rotate-2"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "AHMED M.", location: "CAIRO", quote: "Finally, clothes that get my vibe." },
              { name: "OMAR K.", location: "ALEXANDRIA", quote: "Quality that lasts, style that speaks." },
              { name: "HASSAN A.", location: "GIZA", quote: "Town Team gets the urban Egyptian man." },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="border-2 border-dashed border-charcoal transform hover:-rotate-1 hover:scale-105 transition-all duration-300 bg-concrete-gray"
              >
                <CardContent className="p-6 space-y-4">
                  <Image
                    src={`/placeholder.svg?height=200&width=200&query=hand-drawn sketch polaroid style photo of Egyptian man wearing Town Team fashion street style`}
                    alt={`Customer ${testimonial.name}`}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg transform rotate-1"
                  />
                  <div className="space-y-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-brick-red text-brick-red" />
                      ))}
                    </div>
                    <p className="text-charcoal font-medium italic">"{testimonial.quote}"</p>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-charcoal">{testimonial.name}</span>
                      <MapPin className="w-4 h-4 text-brick-red" />
                      <span className="text-sm text-charcoal">{testimonial.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-brick-red rounded-full flex items-center justify-center mx-auto transform rotate-12">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">FREE DELIVERY</h3>
              <p className="text-concrete-gray">Free shipping across Egypt on orders over EGP 500</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-denim-blue rounded-full flex items-center justify-center mx-auto transform -rotate-12">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">QUALITY GUARANTEE</h3>
              <p className="text-concrete-gray">30-day return policy on all items</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-brick-red rounded-full flex items-center justify-center mx-auto transform rotate-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">STYLE COMMUNITY</h3>
              <p className="text-concrete-gray">Join thousands of style-conscious Egyptian men</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brick-red to-denim-blue">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-white transform -rotate-1">READY TO LEVEL UP?</h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Join the Town Team movement. Style that moves with you, confidence that shows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-charcoal hover:bg-concrete-gray font-bold px-8 py-4 text-lg transform hover:rotate-1 transition-all"
              >
                SHOP COLLECTION
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-charcoal font-bold px-8 py-4 text-lg transform hover:-rotate-1 transition-all bg-transparent"
              >
                FOLLOW US
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-brick-red rounded-sm transform rotate-12"></div>
                <span className="text-2xl font-black">TOWN TEAM</span>
              </div>
              <p className="text-concrete-gray">Urban fashion for the modern Egyptian man.</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold">SHOP</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-concrete-gray hover:text-white transition-colors">
                  New Arrivals
                </Link>
                <Link href="#" className="block text-concrete-gray hover:text-white transition-colors">
                  Jackets
                </Link>
                <Link href="#" className="block text-concrete-gray hover:text-white transition-colors">
                  Shirts
                </Link>
                <Link href="#" className="block text-concrete-gray hover:text-white transition-colors">
                  Jeans
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold">SUPPORT</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-concrete-gray hover:text-white transition-colors">
                  Size Guide
                </Link>
                <Link href="#" className="block text-concrete-gray hover:text-white transition-colors">
                  Returns
                </Link>
                <Link href="#" className="block text-concrete-gray hover:text-white transition-colors">
                  Shipping
                </Link>
                <Link href="#" className="block text-concrete-gray hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold">CONNECT</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-concrete-gray hover:text-white transition-colors">
                  Instagram
                </Link>
                <Link href="#" className="block text-concrete-gray hover:text-white transition-colors">
                  Facebook
                </Link>
                <Link href="#" className="block text-concrete-gray hover:text-white transition-colors">
                  TikTok
                </Link>
                <Link href="#" className="block text-concrete-gray hover:text-white transition-colors">
                  WhatsApp
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-concrete-gray mt-8 pt-8 text-center">
            <p className="text-concrete-gray">© 2024 Town Team. All rights reserved. Made in Egypt.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
