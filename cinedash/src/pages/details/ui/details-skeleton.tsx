import { Skeleton } from "../../../components/ui/skeleton";

export function DetailsSkeleton() {
  return (
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center w-full">
        {/* POSTER */}
        <Skeleton className="w-40 md:w-[350px] h-full aspect-[65/98]! rounded-sm bg-[#2b363f]" />

        {/* INFO */}
        <div className="flex flex-col gap-4 w-full max-w-150">
          {/* TITLE */}
          <div className="flex items-end gap-2">
            <Skeleton className="bg-[#2b363f] h-8 w-60" />
            <Skeleton className="bg-[#2b363f] h-5 w-12" />
          </div>

          {/* RATING */}
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-32 bg-[#2b363f]" />
            <Skeleton className="h-4 w-10 bg-[#2b363f]" />
          </div>

          {/* TAGLINE */}
          <Skeleton className="h-6 w-3/4 bg-[#2b363f]" />

          {/* GENRES */}
          <div className="flex gap-2 flex-wrap">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-6 w-20 rounded-xs bg-[#2b363f]" />
            ))}
          </div>

          {/* OVERVIEW */}
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-full bg-[#2b363f]" />
            <Skeleton className="h-4 w-full bg-[#2b363f]" />
            <Skeleton className="h-4 w-5/6 bg-[#2b363f]" />
            <Skeleton className="h-4 w-4/6 bg-[#2b363f]" />
          </div>

          {/* CAST */}
          <div className="flex flex-col gap-2">
            <Skeleton className="h-5 w-24 bg-[#2b363f]" />
            <div className="flex gap-2 flex-wrap">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton
                  key={i}
                  className="h-6 w-20 rounded-xs bg-[#2b363f]"
                />
              ))}
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col gap-2">
            <Skeleton className="h-5 w-24 bg-[#2b363f]" />

            <div className="flex gap-2">
              <Skeleton className="h-12 w-60 rounded-md bg-[#2b363f]" />
              <Skeleton className="h-12 w-60 rounded-md bg-[#2b363f]" />
            </div>
          </div>
        </div>
      </div>
  );
}
