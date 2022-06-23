import { FileArrowDown, Image } from "phosphor-react";
import { Card } from "./Card";

export function ExclusiveContents() {
  return (
    <div className="gap-8 mt-20 grid grid-cols-2">
      <Card
        url="#"
        icon={<FileArrowDown size={40} />}
        title="Material complementar"
        description="Acesse o material complementar para acelerar o seu desenvolvimento"
      />
      <Card
        url="#"
        icon={<Image size={40} />}
        title="Wallpapers exclusivos"
        description="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
      />
    </div>
  );
}
