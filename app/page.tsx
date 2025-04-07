"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Facebook,
  Instagram,
  Twitter,
  Minus,
  Plus,
  MapPin,
  Phone,
  Mail,
  Menu,
  Bus,
  Package,
  Users,
  Shield,
  ChevronRight,
  Clock,
  Calendar,
  User,
  MessageSquare,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Home() {
  const [passengers, setPassengers] = useState(1)

  const decrementPassengers = () => {
    if (passengers > 1) {
      setPassengers(passengers - 1)
    }
  }

  const incrementPassengers = () => {
    setPassengers(passengers + 1)
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/supermetro.png?height=49&width=197"
              alt="SuperMetro Logo"
              width={197}
              height={49}
              className="h-[49px] w-[197px]"
            />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-[#f9ac6f] flex items-center gap-1">
              <Bus className="h-4 w-4" />
              Services
            </Link>
            <Link href="#network" className="text-sm font-medium hover:text-[#f9ac6f] flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              Network
            </Link>
            <Link href="#booking" className="text-sm font-medium hover:text-[#f9ac6f] flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              Booking
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-[#f9ac6f] flex items-center gap-1">
              <Phone className="h-4 w-4" />
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button className="bg-[#f9ac6f] hover:bg-[#f9ac6f]/90 text-white hidden md:flex">Book Now</Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <Image
                      src="/assets/supermetro.png?height=40&width=40"
                      alt="SuperMetro Logo"
                      width={40}
                      height={40}
                      className="h-10 w-10"
                    />
                    SuperMetro
                  </SheetTitle>
                  <SheetDescription>Moving beyond boundaries, one ride at a time!</SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-6">
                  <SheetClose asChild>
                    <Link
                      href="#services"
                      className="flex items-center gap-2 py-2 text-sm font-medium hover:text-[#f9ac6f]"
                    >
                      <Bus className="h-5 w-5" />
                      Services
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="#network"
                      className="flex items-center gap-2 py-2 text-sm font-medium hover:text-[#f9ac6f]"
                    >
                      <MapPin className="h-5 w-5" />
                      Network
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="#booking"
                      className="flex items-center gap-2 py-2 text-sm font-medium hover:text-[#f9ac6f]"
                    >
                      <Calendar className="h-5 w-5" />
                      Booking
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="#contact"
                      className="flex items-center gap-2 py-2 text-sm font-medium hover:text-[#f9ac6f]"
                    >
                      <Phone className="h-5 w-5" />
                      Contact
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button className="mt-4 w-full bg-[#f9ac6f] hover:bg-[#f9ac6f]/90 text-white">Book Now</Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#ffefef]">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <motion.h1
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#787ab5]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  SuperMetro Transport
                </motion.h1>
                <motion.p
                  className="mx-auto max-w-[700px] text-gray-500 md:text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Moving beyond boundaries, one ride at a time!
                </motion.p>
              </div>
              <motion.div
                className="space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button className="bg-[#787ab5] hover:bg-[#787ab5]/90">Our Services</Button>
                <Button variant="outline" className="border-[#f9ac6f] text-[#f9ac6f]">
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="bg-[#f9ac6f] hover:bg-[#f9ac6f]/80">Our Services</Badge>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#787ab5]">
                  Reliable Transport Solutions
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive transport solutions for all your needs
                </p>
              </div>
            </motion.div>
            <motion.div
              className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div variants={item}>
                <Card className="border-[#f9ac6f]/20 hover:border-[#f9ac6f] transition-all hover:shadow-md">
                  <CardHeader className="pb-2">
                    <Bus className="h-8 w-8 text-[#f9ac6f] mb-2" />
                    <CardTitle className="text-xl text-[#787ab5]">Transit Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">
                      Transit Services in and out of Nairobi CBD. Reliable, safe, and comfortable transportation.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="text-[#f9ac6f] hover:text-[#f9ac6f]/80 hover:bg-[#ffefef] p-0">
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
              <motion.div variants={item}>
                <Card className="border-[#f9ac6f]/20 hover:border-[#f9ac6f] transition-all hover:shadow-md">
                  <CardHeader className="pb-2">
                    <Package className="h-8 w-8 text-[#f9ac6f] mb-2" />
                    <CardTitle className="text-xl text-[#787ab5]">Parcel & Courier</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">
                      Parcel and Courier Services in and around Nairobi CBD. Fast and secure delivery.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="text-[#f9ac6f] hover:text-[#f9ac6f]/80 hover:bg-[#ffefef] p-0">
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
              <motion.div variants={item}>
                <Card className="border-[#f9ac6f]/20 hover:border-[#f9ac6f] transition-all hover:shadow-md">
                  <CardHeader className="pb-2">
                    <Users className="h-8 w-8 text-[#f9ac6f] mb-2" />
                    <CardTitle className="text-xl text-[#787ab5]">Charter Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">
                      Charter a SuperMetro bus for your next trip. Perfect for group travel and events.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="text-[#f9ac6f] hover:text-[#f9ac6f]/80 hover:bg-[#ffefef] p-0">
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
              <motion.div variants={item}>
                <Card className="border-[#f9ac6f]/20 hover:border-[#f9ac6f] transition-all hover:shadow-md">
                  <CardHeader className="pb-2">
                    <Shield className="h-8 w-8 text-[#f9ac6f] mb-2" />
                    <CardTitle className="text-xl text-[#787ab5]">Insurance Agency</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">
                      Super Metro Insurance Agency. Comprehensive coverage for your peace of mind.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="text-[#f9ac6f] hover:text-[#f9ac6f]/80 hover:bg-[#ffefef] p-0">
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#ffefef]">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="bg-[#787ab5] hover:bg-[#787ab5]/80">Partnerships</Badge>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#787ab5]">Our Partners</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Working with the best to provide quality service
                </p>
              </div>
            </motion.div>
            <motion.div
              className="mx-auto py-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-5xl mx-auto"
              >
                <CarouselContent>
  {["isuzu", "hextech", "basigo", "directline"].map((partner, index) => (
    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
      <div className="p-1">
        <Card className="border-[#f9ac6f]/20">
          <CardContent className="flex items-center justify-center p-6">
            <Image
              src={`/assets/partners/${partner}.png`}
              alt={`${partner} Logo`}
              width={160}
              height={80}
              className="h-20 w-40 object-contain"
            />
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  ))}
</CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </motion.div>
          </div>
        </section>

        {/* Network Section */}
        <section id="network" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="bg-[#f9ac6f] hover:bg-[#f9ac6f]/80">Coverage</Badge>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#787ab5]">Our Network</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Connecting communities across the region
                </p>
              </div>
            </motion.div>
            <div className="mx-auto max-w-5xl py-12">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="all">All Locations</TabsTrigger>
                  <TabsTrigger value="nairobi">Nairobi Area</TabsTrigger>
                  <TabsTrigger value="outskirts">Outskirts</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                  <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    {[
                      "Nairobi CBD",
                      "Makongeni",
                      "Thika",
                      "Juja",
                      "Roysambu",
                      "Westlands",
                      "Kikuyu",
                      "Mfangano",
                      "Bus Station",
                      "Malaa",
                      "Kitengela",
                      "Kabiria",
                      "Ngong",
                      "Juja Farm",
                      "Regen",
                      "Kinoo",
                      "Kahawa West",
                      "Airport",
                    ].map((location) => (
                      <motion.div
                        key={location}
                        variants={item}
                        className="flex items-center p-3 rounded-lg border border-[#f9ac6f]/20 hover:border-[#f9ac6f] hover:bg-[#ffefef] transition-colors"
                      >
                        <MapPin className="h-4 w-4 mr-2 text-[#f9ac6f]" />
                        <span className="text-sm">{location}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>
                <TabsContent value="nairobi">
                  <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    {[
                      "Nairobi CBD",
                      "Westlands",
                      "Bus Station",
                      "Mfangano",
                      "Kabiria",
                      "Roysambu",
                      "Kahawa West",
                      "Airport",
                    ].map((location) => (
                      <motion.div
                        key={location}
                        variants={item}
                        className="flex items-center p-3 rounded-lg border border-[#f9ac6f]/20 hover:border-[#f9ac6f] hover:bg-[#ffefef] transition-colors"
                      >
                        <MapPin className="h-4 w-4 mr-2 text-[#f9ac6f]" />
                        <span className="text-sm">{location}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>
                <TabsContent value="outskirts">
                  <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    {[
                      "Thika",
                      "Juja",
                      "Kikuyu",
                      "Malaa",
                      "Kitengela",
                      "Ngong",
                      "Juja Farm",
                      "Regen",
                      "Kinoo",
                      "Makongeni",
                    ].map((location) => (
                      <motion.div
                        key={location}
                        variants={item}
                        className="flex items-center p-3 rounded-lg border border-[#f9ac6f]/20 hover:border-[#f9ac6f] hover:bg-[#ffefef] transition-colors"
                      >
                        <MapPin className="h-4 w-4 mr-2 text-[#f9ac6f]" />
                        <span className="text-sm">{location}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Airport Shuttle Booking Section */}
        <section id="booking" className="w-full py-12 md:py-24 lg:py-32 bg-[#ffefef]">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="bg-[#787ab5] hover:bg-[#787ab5]/80">Reservations</Badge>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#787ab5]">
                  Airport Shuttle Booking
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Book your airport shuttle in advance for a hassle-free journey
                </p>
              </div>
            </motion.div>
            <motion.div
              className="mx-auto max-w-2xl py-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Book Your Shuttle</CardTitle>
                  <CardDescription>Fill in the details to reserve your seat</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="from"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                        >
                          <MapPin className="h-4 w-4 text-[#f9ac6f]" />
                          From
                        </label>
                        <Select>
                          <SelectTrigger id="from">
                            <SelectValue placeholder="Select location" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="nairobi">Nairobi CBD</SelectItem>
                            <SelectItem value="thika">Thika</SelectItem>
                            <SelectItem value="juja">Juja</SelectItem>
                            <SelectItem value="airport">Airport</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="to"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                        >
                          <MapPin className="h-4 w-4 text-[#f9ac6f]" />
                          To
                        </label>
                        <Select>
                          <SelectTrigger id="to">
                            <SelectValue placeholder="Select destination" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="nairobi">Nairobi CBD</SelectItem>
                            <SelectItem value="thika">Thika</SelectItem>
                            <SelectItem value="juja">Juja</SelectItem>
                            <SelectItem value="airport">Airport</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="date"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                        >
                          <Calendar className="h-4 w-4 text-[#f9ac6f]" />
                          Date
                        </label>
                        <Input type="date" id="date" />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="time"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                        >
                          <Clock className="h-4 w-4 text-[#f9ac6f]" />
                          Time
                        </label>
                        <Input type="time" id="time" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="passengers"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                        >
                          <Users className="h-4 w-4 text-[#f9ac6f]" />
                          Passengers
                        </label>
                        <div className="flex items-center">
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            className="rounded-r-none border-r-0"
                            aria-label="Decrease passenger count"
                            onClick={decrementPassengers}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <Input
                            type="number"
                            id="passengers"
                            value={passengers}
                            onChange={(e) => setPassengers(Math.max(1, Number.parseInt(e.target.value) || 1))}
                            min="1"
                            className="rounded-none text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          />
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            className="rounded-l-none border-l-0"
                            aria-label="Increase passenger count"
                            onClick={incrementPassengers}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                        >
                          <Phone className="h-4 w-4 text-[#f9ac6f]" />
                          Phone Number
                        </label>
                        <Input type="tel" id="phone" placeholder="+254 7XX XXX XXX" />
                      </div>
                    </div>
                    <Button type="submit" className="w-full bg-[#787ab5] hover:bg-[#787ab5]/90">
                      Book Shuttle
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Complaints & Feedback Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="bg-[#f9ac6f] hover:bg-[#f9ac6f]/80">Feedback</Badge>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#787ab5]">
                  Complaints & Feedback
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We value your feedback to improve our services
                </p>
              </div>
            </motion.div>
            <motion.div
              className="mx-auto max-w-2xl py-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Share Your Thoughts</CardTitle>
                  <CardDescription>Help us serve you better</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                        >
                          <User className="h-4 w-4 text-[#f9ac6f]" />
                          Name
                        </label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="feedback-phone"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                        >
                          <Phone className="h-4 w-4 text-[#f9ac6f]" />
                          Phone Number
                        </label>
                        <Input type="tel" id="feedback-phone" placeholder="+254 7XX XXX XXX" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="description"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                      >
                        <MessageSquare className="h-4 w-4 text-[#f9ac6f]" />
                        Description
                      </label>
                      <Textarea
                        id="description"
                        placeholder="Please describe your feedback or complaint"
                        className="min-h-[150px]"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-[#f9ac6f] hover:bg-[#f9ac6f]/90">
                      Submit Feedback
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Vehicles Showcase Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#ffefef]">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="bg-[#787ab5] hover:bg-[#787ab5]/80">Our Fleet</Badge>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#787ab5]">Our Fleet</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Modern, comfortable, and well-maintained vehicles
                </p>
              </div>
            </motion.div>
            <motion.div
              className="mx-auto py-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full max-w-5xl mx-auto"
              >
                <CarouselContent>
  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
    <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3 pl-4">
      <Card className="overflow-hidden border-0">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Image
            src={`/metrobus${i}.jpeg`}
            alt={`SuperMetro Vehicle ${i}`}
            width={300}
            height={200}
            className="h-[200px] w-full object-cover rounded-t-lg"
          />
        </motion.div>
      </Card>
    </CarouselItem>
  ))}
</CarouselContent>

                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
              </Carousel>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="bg-[#f9ac6f] hover:bg-[#f9ac6f]/80">Get In Touch</Badge>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#787ab5]">Contact Us</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch with our team
                </p>
              </div>
            </motion.div>
            <motion.div
              className="mx-auto max-w-5xl py-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="grid gap-8 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>Reach out to us through any of these channels</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <motion.div
                      className="flex items-center space-x-4"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Phone className="h-6 w-6 text-[#f9ac6f]" />
                      <div>
                        <h3 className="text-lg font-medium">Phone</h3>
                        <div className="grid gap-1 text-sm">
                          <p>+254 722730430</p>
                          <p>+254 721202313</p>
                          <p>+254 723987478</p>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex items-center space-x-4"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MapPin className="h-6 w-6 text-[#f9ac6f]" />
                      <div>
                        <h3 className="text-lg font-medium">Address</h3>
                        <p className="text-sm">Njengi House, 7th floor, Nairobi</p>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex items-center space-x-4"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Mail className="h-6 w-6 text-[#f9ac6f]" />
                      <div>
                        <h3 className="text-lg font-medium">Email</h3>
                        <p className="text-sm">info@supermetro.co.ke</p>
                      </div>
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Follow Us</h3>
                      <div className="flex space-x-4">
                        <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                          <Link href="#" className="text-gray-500 hover:text-[#f9ac6f]">
                            <Facebook className="h-6 w-6" />
                            <span className="sr-only">Facebook</span>
                          </Link>
                        </motion.div>
                        <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                          <Link href="#" className="text-gray-500 hover:text-[#f9ac6f]">
                            <Instagram className="h-6 w-6" />
                            <span className="sr-only">Instagram</span>
                          </Link>
                        </motion.div>
                        <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                          <Link href="#" className="text-gray-500 hover:text-[#f9ac6f]">
                            <Twitter className="h-6 w-6" />
                            <span className="sr-only">Twitter</span>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-0">
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.816979252983!2d36.82229477487975!3d-1.2836929987041037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1129e33cd85b%3A0x7d45aa024519e647!2sNjengi%20House!5e0!3m2!1sen!2sus!4v1744062399359!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="SuperMetro Location"
                        className="h-full w-full"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#ffefef]">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="bg-[#787ab5] hover:bg-[#787ab5]/80">FAQ</Badge>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#787ab5]">
                  Frequently Asked Questions
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about our services
                </p>
              </div>
            </motion.div>
            <motion.div
              className="mx-auto max-w-3xl py-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">What are your operating hours?</AccordionTrigger>
                  <AccordionContent>
                    Our buses operate from 5:00 AM to 10:00 PM daily. However, specific routes may have different
                    schedules. Please check our route timetables for more details.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">How do I book a charter service?</AccordionTrigger>
                  <AccordionContent>
                    You can book our charter services by calling our office at +254 722730430 or by filling out the
                    contact form on our website. Please provide details about your trip, including date, time,
                    destination, and number of passengers.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">What is your luggage policy?</AccordionTrigger>
                  <AccordionContent>
                    Each passenger is allowed one piece of luggage and one carry-on bag. Additional luggage may incur
                    extra charges. Oversized items must be declared in advance.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">How can I track my parcel?</AccordionTrigger>
                  <AccordionContent>
                    You can track your parcel by using the tracking number provided at the time of sending. Enter the
                    tracking number on our website or contact our customer service for assistance.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">Do you offer discounts for group travel?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer special rates for group travel. The discount depends on the group size and
                    destination. Please contact our office for more information and to get a quote.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-[#333333] text-white py-6">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/supermetro.png?height=49&width=197"
                  alt="SuperMetro Logo"
                  width={197}
                  height={49}
                  className="h-[49px] w-[197px]"
                />
              </div>
              <p className="text-sm text-gray-300">Moving beyond boundaries, one ride at a time!</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Quick Links</h3>
              <nav className="flex flex-col space-y-2 text-sm">
                <Link href="#services" className="hover:text-[#f9ac6f]">
                  Services
                </Link>
                <Link href="#network" className="hover:text-[#f9ac6f]">
                  Network
                </Link>
                <Link href="#booking" className="hover:text-[#f9ac6f]">
                  Booking
                </Link>
                <Link href="#contact" className="hover:text-[#f9ac6f]">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Services</h3>
              <nav className="flex flex-col space-y-2 text-sm">
                <Link href="#" className="hover:text-[#f9ac6f]">
                  Transit Services
                </Link>
                <Link href="#" className="hover:text-[#f9ac6f]">
                  Parcel & Courier
                </Link>
                <Link href="#" className="hover:text-[#f9ac6f]">
                  Charter Services
                </Link>
                <Link href="#" className="hover:text-[#f9ac6f]">
                  Insurance Agency
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Contact</h3>
              <div className="flex flex-col space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+254 722730430</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Njengi House, 7th floor, Nairobi</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>info@supermetro.co.ke</span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
            <p>© {new Date().getFullYear()} SuperMetro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

