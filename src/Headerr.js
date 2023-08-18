import { memo } from "react";

function Headerr() {
  console.log("HEADER rendered");
  return <div>HEADER</div>;
}
export default memo(Headerr);

//useMemo: optimizasyon icin sürekli boş yere render olan componentlerin önüne geçebilmek icin kullanılır
//Hesaplamaları önbellekte saklamak ve gereksiz hesaplamaları önlemek için kullanılır.
