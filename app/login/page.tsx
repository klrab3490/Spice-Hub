import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Login() {
  return (
    <div className="flex justify-center h-screen px-10 py-5 md:px-36">
      <div className="flex w-full justify-center h-[500px] border-green-200 border rounded-md">
        <div className="hidden w-1/3 bg-green-500 h-full p-10 pr-5 md:flex flex-col gap-5">
          <p className="font-medium text-3xl">Login</p>
          <p className="text-lg">
            Get access to your Orders, Wishlist and Recommendations
          </p>
        </div>
        <div className="w-full md:w-2/3 h-full text-center p-10 flex flex-col items-center justify-between">
          <div>
            <p className="text-2xl">Sign in to continue</p>
            <div>
              <p className="text-xs pt-8 pb-8 md:pb-3 text-left">
                By continuing you are agreeing to SpiceHub&apos;s{" "}
                <a
                  className="text-[#5d96f3]"
                  href="#"
                >
                  Terms of Use
                </a>{" "}
                and <br className="hidden md:block" />{" "}
                <a
                  className="text-[#5d96f3]"
                  href=""
                >
                  Privacy Policy
                </a>
              </p>
              <Button className="w-full flex gap-3 h-10">
                <Image
                  src="/google.svg"
                  alt="Google Logo"
                  width={100}
                  height={100}
                  className="w-8"
                />
                <p>Sign in with Google</p>
              </Button>
            </div>
          </div>
          <div>
            <a
              className="text-sm text-green-400 font-medium"
              href="#"
            >
              New to SpiceHub? Create an account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
