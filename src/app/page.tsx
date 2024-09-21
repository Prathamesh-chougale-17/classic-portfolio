import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard } from "lucide-react";
import { Terminal } from "./terminal";
import Link from "next/link";
import { achievements } from "@/components/globalData";

export default function HomePage() {
  return (
    <main>
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">
                <span className="block text-orange-500">Hello Everyone</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                I&#39;m Prathamesh Chougale a full-stack developer with a
                passion for building high-quality software. I specialize in
                building web applications with modern technologies like Next.js,
                Tailwind CSS, and Prisma.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <Link href={"/contact"}>
                  <Button className="bg-white dark:bg-black/90 dark:text-white text-black dark:hover:bg-gray-600 hover:bg-gray-100 border border-gray-200 rounded-full text-lg px-8 py-4 inline-flex items-center justify-center">
                    Contact Me
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <Terminal />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Achievements</h2>
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {achievements.map((achievement) => (
              <div key={achievement.title} className="mt-10 lg:mt-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                  <CreditCard className="h-6 w-6" />
                </div>
                <div className="mt-5">
                  <h2 className="text-lg font-medium">{achievement.title}</h2>
                  <p className="mt-2 text-base opacity-70">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
