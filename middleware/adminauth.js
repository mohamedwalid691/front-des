export default function (context) {

  if (context.store.state.userState.role != 'admin') {

    context.redirect('/auth/login')
  }
}
