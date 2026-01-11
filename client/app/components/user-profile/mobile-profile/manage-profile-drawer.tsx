import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUpdateUserProfile } from "@/hooks/use-user";
import { profileSchema } from "@/lib/schema";
import type { User } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Camera } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type z from "zod";

export type ProfileFormData = z.infer<typeof profileSchema>;

export const ManageProfileDrawer = ({
  user,
  isOpen,
  onOpenChange,
}: {
  user: User;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user?.name || "",
      username: user?.username || "",
      profilePicture: user?.profilePicture || "",
    },
    values: {
      name: user?.name || "",
      profilePicture: user?.profilePicture || "",
      username: user?.username || "",
    },
  });

  const { mutate: updateUserProfile, isPending } = useUpdateUserProfile();

  const handleProfileFormSubmit = (values: ProfileFormData) => {
    updateUserProfile(
      {
        name: values.name,
        username: values.username,
        profilePicture: values.profilePicture || "",
      },
      {
        onSuccess: () => {
          toast.success("Profile updated successfully");
          onOpenChange(false);
        },
        onError: (error: any) => {
          const errorMessage =
            error.response?.data?.error || "Failed to update profile";
          toast.error(errorMessage);
          console.log(error);
        },
      }
    );
  };

  useEffect(() => {
    if (imageFile) {
      const url = URL.createObjectURL(imageFile);
      setImageUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [imageFile]);

  return (
    <Drawer open={isOpen} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Manage Profile</DrawerTitle>
          <DrawerDescription>
            Update your full name below. Your email address is linked to your
            account and cannot be changed
          </DrawerDescription>
        </DrawerHeader>

        <Card className="shadow-none! border-0 overflow-y-auto ">
          <CardContent>
            <Form {...form}>
              <form
                className="space-y-6"
                onSubmit={form.handleSubmit(handleProfileFormSubmit)}
              >
                <div className="w-fit relative">
                  <Label htmlFor="profilePic">
                    <Avatar className="size-27 bg-gray-600">
                      <AvatarImage
                        src={imageUrl ? imageUrl : user?.profilePicture}
                        alt={user?.name}
                        className="object-cover"
                      />
                      <AvatarFallback className="text-4xl">
                        {user?.name?.charAt(0) || "U"}
                      </AvatarFallback>
                    </Avatar>
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary absolute bottom-1 -right-1 border-5 border-card">
                      <Camera className="size-4.5 text-primary-foreground" />
                    </span>
                  </Label>

                  <FormField
                    control={form.control}
                    name="profilePicture"
                    render={({ field: { value, onChange, ...fieldProps } }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...fieldProps}
                            type="file"
                            hidden
                            id="profilePic"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                setImageFile(file);
                                form.setValue("profilePicture", file);
                              }
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary">Full Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary">Username</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormItem>
                  <FormLabel className="text-primary">Email Address</FormLabel>
                  <Input value={user?.email} disabled />
                  <FormMessage />
                </FormItem>

                <DrawerFooter>
                  <Button className="w-full" disabled={isPending}>
                    Submit
                  </Button>
                  <DrawerClose>
                    <Button
                      variant={"outline"}
                      className="w-full"
                      type="button"
                      disabled={isPending}
                    >
                      Cancel
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </form>
            </Form>
          </CardContent>
        </Card>
      </DrawerContent>
    </Drawer>
  );
};
