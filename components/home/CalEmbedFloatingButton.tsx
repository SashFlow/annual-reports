"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function CalEmbedFloatingButton() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "report-deck" });
      cal("floatingButton", {
        calLink: "sashflow/report-deck",
        config: {
          layout: "month_view",
          useSlotsViewOnSmallScreen: "true",
        },
        buttonColor: "#c1b9ff",
        buttonTextColor: "#000000",
        hideButtonIcon: false,
        buttonText: "Book a Call",
      });
      cal("ui", { hideEventTypeDetails: true, layout: "month_view" });
    })();
  }, []);

  return null;
}
