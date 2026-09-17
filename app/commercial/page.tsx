import { permanentRedirect } from "next/navigation";

/** /commercial was the homepage when the site served two audiences.
 *  Kept as a 308 so existing inbound links and any Google history follow. */
export default function CommercialRedirect() {
  permanentRedirect("/");
}
