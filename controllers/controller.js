
export async function home(req,res){
    res.render('admin/index')
}

//time:

export async function abreaddtime(req, res) {
    res.render('admin/time/add')
}
export async function addtime(req, res) {
    res.redirect('/admin/time/add')
}
export async function listartime(req, res) {
    res.render('admin/time/lst', '');
}
export async function filtrartime(req, res) {
    res.render('admin/time/lst', '');
}
export async function deletatime(req, res) {
   res.redirect('/admin/time/lst')
}
export async function abreedttime(req, res){
   
    res.render('admin/time/edt','')
}
export async function edttime(req, res){
    res.redirect('/admin/time/lst')
}

//jogador:

export async function abreaddjogador(req, res) {
    res.render('admin/jogador/add')
}
export async function addjogador(req, res) {
    res.redirect('/admin/jogador/add')
}
export async function listarjogador(req, res) {
    res.render('admin/jogador/lst', '');
}
export async function filtrarjogador(req, res) {
    res.render('admin/jogador/lst', '');
}
export async function deletajogador(req, res) {
   res.redirect('/admin/jogador/lst')
}
export async function abreedtjogador(req, res){
   
    res.render('admin/jogador/edt','')
}
export async function edtjogador(req, res){
    res.redirect('/admin/jogador/lst')
}