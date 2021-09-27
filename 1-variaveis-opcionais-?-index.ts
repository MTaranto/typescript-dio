interface IUsuario {
  id: string;
  email: string;
  cargo?: 'funcionário' | 'gerente' | 'coordenador' | 'supervisor';
} // Obs: O sinal '?' torna o input cargo opcional

function redirecione (usuario: IUsuario) {
  if (usuario.cargo) {
    // redirecionar (usuario.cargo);
  }
  // redirecionar para a área do usuário
}
