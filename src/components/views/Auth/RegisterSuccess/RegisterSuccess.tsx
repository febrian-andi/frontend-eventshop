import { Button } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/router";

const RegisterSuccess = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center justify-center gap-10">
        <Image
          src="/images/general/logo.svg"
          alt="logo"
          width={150}
          height={150}
        />
        <Image
          src="/images/illustration/email-send.svg"
          alt="email-send-illustration"
          width={300}
          height={300}
        />
      </div>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-bold text-primary-500">
          Create Account Success
        </h1>
        <p className="text-xl font-medium text-default-500">
          Please check your email to verify your account
        </p>
        <Button
          className="mt-4 w-fit"
          variant="bordered"
          color="primary"
          onClick={() => router.push("/")}
        >
          Back to Home
        </Button>
      </div>
    </div> 
  );
};

export default RegisterSuccess;
