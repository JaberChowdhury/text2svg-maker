import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useTheme } from "@/components/theme/theme-provider";

export default function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const themeData = ["dark", "light"];
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">{theme.toUpperCase()}</Button>
      </SheetTrigger>
      <SheetContent>
        <Card className="my-2 py-1">
          <SheetHeader>Choose theme</SheetHeader>
        </Card>
        <div className="w-full grid gap-y-2">
          {themeData.map((data, id) => (
            <Button
              className={`flex ${
                theme === data.toLowerCase() &&
                "border-2 justify-between items-center border-teal-300"
              } justify-between items-center relative`}
              onClick={() => setTheme(data.toLowerCase())}
              key={id}
            >
              <div>{data.toUpperCase()}</div>
              <div>{theme === data.toLowerCase() && <CheckCircle />}</div>
            </Button>
          ))}
        </div>
        <SheetFooter className="mt-2">
          <SheetClose asChild>
            <Button variant="destructive">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
