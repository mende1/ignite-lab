import { DiscordLogo, Lightning } from "phosphor-react";
import { Button } from "../Button";

export function ComunityButtons() {
  return (
    <div className="flex flex-col gap-4">
      <Button variant="primary" url="#">
        <DiscordLogo size={24} />
        Comunidade no Discord
      </Button>
      <Button variant="secondary" url="#">
        <Lightning size={24} />
        Acesse o Desafio
      </Button>
    </div>
  );
}
