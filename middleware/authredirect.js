// export default function (context) {
//   if (context.store.state.isAuth) {
//     const locale =
//       context.i18n.locale === context.i18n.defaultLocale
//         ? ""
//         : "/" + context.i18n.locale;
//     console.log(context.i18n.defaultLocale);
//     if (context.i18n.defaultLocale === context.i18n.locale) {
//       context.redirect("/admin/dashboard");
//     } else {
//       context.redirect(`${context.i18n.locale}/admin/dashboard`);
//     }
//   } else {
//     return true;
//   }
// }
