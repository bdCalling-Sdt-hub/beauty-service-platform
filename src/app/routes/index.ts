import express from "express";
import { UserRoutes } from "../modules/user/user.routes";
import { AuthRoutes } from "../modules/auth/auth.routes";
import { clientAgreementRoute } from "../modules/clientAgreement/clientAgreement.route";
import { CategoryRoutes } from "../modules/category/category.route";
import { SubCategoryRoutes } from "../modules/sub-category/sub-category.route";
import { ServiceManagementRoutes } from "../modules/servicemanagement/servicemanagement.route";
import { UserTakeServiceRoutes } from "../modules/usertakeservice/usertakeservice.route";
import { NotificationRoutes } from "../modules/notification/notification.routes";
import { PlanRoutes } from "../modules/plan/plan.route";
import { SubscriptionRoutes } from "../modules/subscription/subscription.routes";
import { ReferralRoutes } from "../modules/referral/referral.route";
import { WalletRoutes } from "../modules/wallet/wallet.route";
import { ReviewRoutes } from "../modules/review/review.routes";
import { DisclaimerRoutes } from "../modules/disclaimer/disclaimer.route";
import { BonusAndChallengeRoute } from "../modules/bonusAndChallenge/bonusAndChallenge.route";
import { FaqRoutes } from "../modules/faq/faq.route";
import { ReportRoutes } from "../modules/report/report.routes";
import { AnalyticsRoutes } from "../modules/analytics/analytics.route";
import { PredefiendReviewRoutes } from "../modules/predefind_reviews/predefind_review.route";
import { DocumentRoutes } from "../modules/document/document.route";
import { AdminRoutes } from "../modules/admin/admin.route";
import { CheckrRoutes } from "../modules/checkr/checkr.route";
const router = express.Router();

const apiRoutes = [
  { path: "/user", route: UserRoutes },
  { path: "/auth", route: AuthRoutes },
  { path: "/clientAgreement", route: clientAgreementRoute },
  { path: "/plan", route: PlanRoutes },
  { path: "/subscription", route: SubscriptionRoutes },
  { path: "/category", route: CategoryRoutes },
  { path: "/subCategory", route: SubCategoryRoutes },
  { path: "/serviceManagement", route: ServiceManagementRoutes },
  { path: "/service", route: UserTakeServiceRoutes },
  { path: "/referral", route: ReferralRoutes },
  { path: "/notification", route: NotificationRoutes },
  { path: "/wallet", route: WalletRoutes },
  { path: "/review", route: ReviewRoutes },
  { path: "/disclaimer", route: DisclaimerRoutes },
  { path: "/bonusAndChallenge", route: BonusAndChallengeRoute },
  {path:"/faq",route:FaqRoutes},
  {path:"/report",route:ReportRoutes},
  {path:'/analytics',route:AnalyticsRoutes},
  {path:"/pre-review",route:PredefiendReviewRoutes},
  {path:"/document", route:DocumentRoutes},
  {path:"/admin",route:AdminRoutes},
  {path:"/checkr",route:CheckrRoutes},
];

apiRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
