
import { useSelector, useDispatch } from "react-redux";
import { converterSelector } from "./converterSlice";
import { fontsSelector, fetchFonts } from "@/features/fonts/fontsSlice";
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
import { fontType } from "@/features/fonts/fontsSlice"

const SelectFontView = () => {
  const dispatch = useDispatch();

  const { selectedFont } = useSelector(converterSelector);
  const { fonts, isLoading, error } = useSelector(fontsSelector);

  const handleSelectedFont = async (data: fontType) => {
    dispatch({ payload: { selectedFont: data } });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>{selectedFont.family}</Button>
      </SheetTrigger>
      <SheetContent side="left" className="overflow-y-scroll">
        <Card className="my-2 py-1">
          <SheetHeader>Choose font</SheetHeader>
        </Card>
        <div className="w-full grid gap-y-2">
          {fonts.map((font, id) => {
            return (
              <Button onClick={() => handleSelectedFont(font)} key={id}>
                <div>{font.family}</div>
                {selectedFont.key === font.key && <CheckCircle />}
              </Button>
            );
          })}
          {fonts.length < 1000 && (
            <Button
              className="bg-teal-400"
              onClick={() => dispatch(fetchFonts())}
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
