import Button from "@/components/Button";
import Image from "next/image";
import { Sora } from "@next/font/google";
import type { Metadata } from "next";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eFront - Aprenda frontend do zero com uma linguagem simples",
  description:
    "Trabalhe de casa, usando as tecnologias mais requisitados do mercado frontend.",
  viewport: "width=device-width, initial-scale=1",
};

export default function Home() {
  return (
    <main>
      <div className="flex h-[50px] w-full items-center justify-center bg-top-banner">
        <h1 className="text-lg font-medium">
          Aproveite os últimos dias de promoção
        </h1>
      </div>
      <header className="mx-auto mt-8 flex flex-col items-center justify-between px-5 lg:max-w-7xl lg:flex-row lg:px-0">
        <Image alt="Logo" src="/logo.svg" width={150} height={150} />
        <Button className="mt-8 w-full rounded-4 border border-cyan-400 py-4 px-6 font-semibold lg:w-auto">
          GARANTIR EBOOK
        </Button>
      </header>
      <main className="mx-auto mt-8 px-5 lg:mt-36 lg:max-w-7xl lg:px-0">
        <section className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-28">
          <div>
            <div className="flex items-center justify-center rounded-full border border-[#130B1D] bg-[#08040D] py-2 px-8 lg:max-w-xs lg:justify-start">
              <Image
                alt="Student Icon"
                src="/icons/student.svg"
                width={24}
                height={24}
              />
              <span className="ml-2 font-medium">
                Junta-se a +2.500 membros
              </span>
            </div>
            <h1
              className={`text-center text-4xl font-semibold lg:text-start lg:text-5xl ${sora.className} my-10`}
            >
              Comece a estudar{" "}
              <span className="bg-gradient-to-r from-[#4776E6] to-[#8E54E9] bg-clip-text text-transparent">
                frontend
              </span>{" "}
              do zero com uma linguagem simples
            </h1>
            <p className="text-center text-lg text-[#BFBFBF] lg:text-left lg:text-2xl">
              Trabalhe de casa, usando as tecnologias mais requisitados do
              mercado frontend.
            </p>
          </div>
          <div className="h-full border-4 bg-white p-8">
            <div className="mb-14 flex items-center">
              <div className="rounded-4 bg-[#030007] px-7 py-1">
                <span className="text-lg font-semibold">70% OFF</span>
              </div>
              <span className="ml-6 font-medium text-black">
                Por tempo limitado
              </span>
            </div>
            <span
              className={`text-2xl font-semibold text-[#030007] ${sora.className}`}
            >
              de <span className="line-through">R$ 100,00</span> por
            </span>
            <p
              className={`text-5xl font-semibold text-[#030007] lg:text-7xl ${sora.className} mt-4`}
            >
              R$ 25,00
            </p>
            <Button
              className={`mt-16 mb-6 w-full rounded-4 border bg-top-banner py-4 px-6`}
            >
              <p className={`font-semibold ${sora.className}`}>
                GARANTIR EBOOK
              </p>
            </Button>
            <p className="text-center text-lg font-medium text-[#08040D]">
              Cartão de crédito, Boleto à vista, PayPal e Pix
            </p>
          </div>
        </section>
      </main>
      <footer className="mt-12 w-screen bg-[#08040D] p-5 lg:absolute lg:bottom-0 lg:mt-0">
        <div className="mx-auto flex max-w-7xl flex-col py-5 text-center lg:flex-row lg:justify-between">
          <div>
            <span className="font-light">
              Copyright © {new Date().getFullYear()}{" "}
              <span
                className={`bg-gradient-to-r from-[#4776E6] to-[#8E54E9] bg-clip-text font-bold text-transparent ${sora.className}`}
              >
                adsonmartins.dev
              </span>
              .{" "}
              <span className="inline-block lg:inline-flex">
                Todos os direitos reservados.
              </span>
            </span>
          </div>
          <div className="mt-2 lg:mt-0">
            <span className="font-medium">Powered by</span>
            <span className="ml-4 bg-gradient-to-r from-[#4776E6] to-[#8E54E9] bg-clip-text text-2xl font-bold text-transparent">
              {"{"} )
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
