import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-muted-foreground/15 pt-20 pb-10">
      <div className="container mx-auto px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6 text-black">
              <div className="h-10 w-10">
                <Image src="./logo.png" alt="" />
              </div>
              <div>
                <p className="text-sm font-bold leading-none">SMK NEGERI 6</p>
                <p className="text-xs ">MALANG</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 ">
              Sekolah menengah kejuruan negeri pelopor di bidang teknologi dan
              rekayasa, ber-komitmen mencetak generasi unggul siap kerja.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/smkn6malang_official"
                target="_blank"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Instagram"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@AksataMultimedia"
                target="_blank"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="YouTube"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-black font-bold mb-6">Menu Utama</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Profil Sekolah
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Blog & Berita
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-yellow-400 transition-colors"
                >
                  PPDB
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-black font-bold mb-6">Program Keahlian</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Rekayasa Perangkat Lunak
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Teknik Komputer Jaringan
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Desain Komunikasi Visual
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Teknik Permesinan
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-black font-bold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>
                  Jl. Ki Ageng Gribig No. 28, Kedungkandang, Kota Malang, Jawa
                  Timur 65139
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span>(0341) 712500</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>info@SMK Negeri6malang.sch.id</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700"></hr>

        <div className="flex pt-4 flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; 2025 SMK Negeri 6 Malang</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-black">
              Kebijakan Privasi
            </Link>
            <Link href="#" className="hover:text-black">
              Syarat & Ketentuan
            </Link>
            <Link href="#" className="hover:text-black">
              Kredit
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
