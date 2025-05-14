import { Button } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/router";

interface PropTypes {
  status: "success" | "failed";
}

const Activation = (props: PropTypes) => {
  const router = useRouter();
  const { status } = props;

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
          src={status === "success" ? "/images/illustration/email-send.svg" : "/images/illustration/pending.svg"}
          alt="actibation-status-illustration"
          width={300}
          height={300}
        />
      </div>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-bold text-primary-500">
          {status === "success"? "Activation Success" : "Activation Failed"}
        </h1>
        <p className="text-xl font-medium text-default-500">
        {status === "success"? "Your account has been successfully registered. Thank you." : "Oops! That confirmation code isn’t valid."}
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

export default Activation;
