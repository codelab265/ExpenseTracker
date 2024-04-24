import { useState } from "react";
import { PenBox, Plus } from "lucide-react";

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

function EditBudget({ budget }) {
    const [openEmojiPicker, setOpenEmojiPicker] = useState(false);

    const { data, setData, patch, processing, errors, clearErrors } = useForm({
        name: budget.name,
        amount: budget.amount,
        icon: budget.icon,
    });

    const UpdateBudget = (e) => {
        e.preventDefault();
        clearErrors();
        patch(`/dashboard/budget/update/${budget.id}`, {
            onSuccess: () => {
                toast("Budget update successfully");
            },
        });
    };

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="gap-1">
                        <PenBox />
                        Edit Budget
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Update Budget</DialogTitle>
                        <DialogDescription>
                            <form onSubmit={UpdateBudget}>
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
                                            Update
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

export default EditBudget;
