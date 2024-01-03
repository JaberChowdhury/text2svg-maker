import { useSelector, useDispatch } from "react-redux";
import { converterSelector, changeFont } from "./converterSlice";
import {
  fontsSelector,
  type Font,
  fetchFonts,
} from "@/features/fonts/fontsSlice";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const SelectFontView = () => {
  const dispatch = useDispatch();

  const { selectedFont } = useSelector(converterSelector);
  const { fonts, isLoading, error } = useSelector(fontsSelector);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Card className="w-full flex p-2 justify-between items-center relative">
          <Card className="text-2xl border-none">Font</Card>
          <Button>{selectedFont.family}</Button>
        </Card>
      </SheetTrigger>
      <SheetContent side="left" className="overflow-y-scroll">
        <Card className="my-2 py-1">
          <SheetHeader>Choose font</SheetHeader>
        </Card>
        <div className="w-full grid gap-y-2">
          {fonts.map((font: Font, id: number) => {
            return (
              <Button
                className={`flex ${
                  font.key === selectedFont.key && "border-2 border-orange-300"
                } justify-between items-center`}
                onClick={() => dispatch(changeFont({ selectedFont: font }))}
                key={id}
              >
                <div>{font.family}</div>
                {font.key === selectedFont.key && <CheckCircle />}
              </Button>
            );
          })}
          {fonts.length < 1000 && (
            <Button
              className="bg-teal-400"
              onClick={() => dispatch(fetchFonts() as any)}
            >
              More font
            </Button>
          )}
          {isLoading && <Card>Loading...</Card>}
          {error && <Card>{error}</Card>}
        </div>
        <SheetFooter className="mt-2">
          <SheetClose asChild>
            <Button variant="destructive">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SelectFontView;
