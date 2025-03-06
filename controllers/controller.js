
export async function home(req,res){
    res.render('admin/index')
}
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
export async function addPlayer(req, res){
    res.redirect('/admin/time/addPlayer')
}