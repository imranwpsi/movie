import { useMutation } from "@tanstack/react-query";
import { f as useTrans, t as toast, m as message, k as showHttpErrorToast, l as apiClient } from "../server-entry.mjs";
function useCancelSubscription() {
  const { trans } = useTrans();
  return useMutation((props) => cancelSubscription(props), {
    onSuccess: (response, payload) => {
      toast(
        payload.delete ? trans(message("Subscription deleted.")) : trans(message("Subscription cancelled."))
      );
    },
    onError: (err) => showHttpErrorToast(err)
  });
}
function cancelSubscription({
  subscriptionId,
  ...payload
}) {
  return apiClient.post(`billing/subscriptions/${subscriptionId}/cancel`, payload).then((r) => r.data);
}
function useResumeSubscription() {
  const { trans } = useTrans();
  return useMutation((props) => resumeSubscription(props), {
    onSuccess: () => {
      toast(trans(message("Subscription renewed.")));
    },
    onError: (err) => showHttpErrorToast(err)
  });
}
function resumeSubscription({ subscriptionId }) {
  return apiClient.post(`billing/subscriptions/${subscriptionId}/resume`).then((r) => r.data);
}
export {
  useResumeSubscription as a,
  useCancelSubscription as u
};
//# sourceMappingURL=use-resume-subscription-a881484a.mjs.map
