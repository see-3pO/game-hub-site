// hook to fetch parent platforms data

import { fetchData } from "../services/api";
import { fetchPlatformsKey } from "../utils/query-keys";
import useData from "./UseData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useData<Platform>({
    qKey: fetchPlatformsKey,
    qFunction: () => fetchData<Platform>("/platforms/lists/parents"),
  });

export default usePlatforms;
