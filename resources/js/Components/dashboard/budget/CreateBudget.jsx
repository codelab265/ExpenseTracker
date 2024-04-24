import { useState } from "react";
import { Plus } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import EmojiPicker, { Emoji } from "emoji-picker-react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { useForm } from "@inertiajs/react";
import { Toaster } from "@/Components/ui/sonner";
import { toast } from "sonner";

function CreateBudget() {
    const [openEmojiPicker, setOpenEmojiPicker] = useState(false);

    const { data, setData, post, processing, errors, reset, clearErrors } =
        useForm({
            name: "",
            amount: "",
            icon: "😀",
        });

    const createBudget = (e) => {
        e.preventDefault();
        clearErrors();
        post("/dashboard/budget", {
            onSuccess: () => {
                reset();
                toast("Budget created successfully");
            },
        });
    };

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <div className="flex flex-col items-center border-2 border-dashed cursor-pointer hover:shadow-md hover:border-primary transition-all duration-300 bg-slate-100 rounded-md p-10">
                        <Plus size={30} />
                        <p className="font-bold">Create New Budget</p>
                    </div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create Budget</DialogTitle>
                        <DialogDescription>
                            <form onSubmit={createBudget}>
                                <div className="mt-5">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="lg"
                                        onClick={() =>
                                            setOpenEmojiPicker(!openEmojiPicker)
                                        }
                                    >
                                        {data.icon}
                                    </Button>
                                    <div className="absolute">
                                        <EmojiPicker
                                            open={openEmojiPicker}
                                            onEmojiClick={(emoji) => {
                                                setData("icon", emoji.emoji);
                                                setOpenEmojiPicker(false);
                                            }}
                                        />
                                    </div>
                                    <div className="mt-5">
                                        <label className="font-medium text-black">
                                            Name
                                        </label>
                                        <Input
                                            placeholder="e.g Home groceries"
                                            type="text"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                        />
                                        {errors.name && (
                                            <div className="text-red-500 text-sm">
                                                {errors.name}
                                            </div>
                                        )}
                                    </div>
                                    <div className="mt-5">
                                        <label className="font-medium text-black">
                                            Amount
                                        </label>
                                        <Input
                                            placeholder="e.g 5000"
                                            type="number"
                                            value={data.amount}
                                            onChange={(e) =>
                                                setData(
                                                    "amount",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.amount && (
                                            <div className="text-red-500 text-sm">
                                                {errors.amount}
                                            </div>
                                        )}
                                    </div>
                                    <div className="mt-5">
                                        <Button
                                            size="lg"
                                            className="w-full"
                                            type="submit"
                                            disabled={processing}
                                        >
                                            Create
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            <Toaster />
        </div>
    );
}

export default CreateBudget;
