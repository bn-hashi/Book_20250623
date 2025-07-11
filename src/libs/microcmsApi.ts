import { createClient, MicroCMSQueries } from   "microcms-js-sdk" ; 
import { Blog } from "./microcmsType" ; 

const apiKey = process.env.MICROCMS_API_KEY || "" ; 
const serviceDomain = process.env.MICROCMS_SERVICE_ID || "" ; 

export const client = createClient({
serviceDomain: serviceDomain,
apiKey: apiKey,
});

// ブログ一覧を取得 
export const getList = async (queries?: MicroCMSQueries) => {
const listData = await client.getList<Blog>({
endpoint: "kindle",
queries,
});
return listData; 
};
