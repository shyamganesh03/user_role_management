import { PasswordInput } from "@/components/common/PasswordInput";
import { Icons } from "@/components/icon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import PeopleCommunicatingImage from "@/assets/people-communicating.avif";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { fetchUserData } from "@/api/ruotes";
import { useDispatch } from "react-redux";
import { setRole, setUsername } from "@/store/reducer/userReducer";

const SignIn = () => {
  const form = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (data: any) => {
    const { email, password } = data;
    const auth = getAuth();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      const getUserDetails = await fetchUserData();
      dispatch(setUsername(getUserDetails?.username));
      dispatch(setRole(getUserDetails?.role));

      navigate("/dashboard");
    } catch (error) {
      console.error("Error during sign-in:", error);
      form.setError("email", {
        type: "manual",
        message: "Invalid email or password",
      });
    }
  };

  return (
    <div className="flex h-screen w-full flex-col lg:flex-row">
      <div className="flex flex-col h-[30%] lg:h-full lg:w-[50%] bg-primary items-center justify-center ">
        <img
          src={PeopleCommunicatingImage}
          alt="People communicating"
          className="rounded-md shadow-md max-h-[120px] lg:max-h-[300px]"
        />
      </div>
      <div className="flex flex-col h-[70%] lg:h-full lg:w-[50%] justify-center items-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Welcome Back</CardTitle>
                <CardDescription>
                  Enter your credentials below to sign in to your account
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <PasswordInput {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <Button variant="outline">
                    <Icons.google className="mr-2 h-4 w-4" />
                    Google
                  </Button>
                  <Button variant="outline">
                    <Icons.apple className="mr-2 h-4 w-4" />
                    Apple ID
                  </Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" type="submit">
                  Sign In
                </Button>
              </CardFooter>
            </Card>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
