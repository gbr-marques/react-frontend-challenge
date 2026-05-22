import { Badge } from "../../components/ui/badge";
import { useCreditsList } from "../../entities/actor/api/use-credits-list";
import type { ICreditedPerson } from "../../entities/actor/model/types";

type Props = {
  movieID: number | undefined;
};

export function CastList({ movieID }: Props) {
  const { data, isLoading, error } = useCreditsList(movieID);

  return (
    <>
      <div className="flex flex-wrap gap-1">
        {data?.cast.slice(0, 20).map((actor: ICreditedPerson, index) => (
          <Badge
            key={index}
            className="bg-[#485568] rounded-xs font-extralight"
          >
            {actor.name}
          </Badge>
        ))}
      </div>
    </>
  );
}
