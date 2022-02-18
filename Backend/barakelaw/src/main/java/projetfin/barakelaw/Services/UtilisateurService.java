package projetfin.barakelaw.Services;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Models.Utilisateur;

import java.io.IOException;
import java.util.List;

@Service
public interface UtilisateurService {
    public Utilisateur addutilisateur(Utilisateur utilisateur, MultipartFile image) throws IOException;
    public Utilisateur updateUtiliseur(Utilisateur utilisateur,long id);
    public void deleteUtilisateur(long id);
    public List<Utilisateur> listeutilisateur(Etat etat);
    public Utilisateur findByIdAndEtat(Etat etat,long id);
    public Utilisateur authUtilisateur(String login,String motpass);
    //pour affiche le photo  "la partie Service"
    public byte[] getPhoto(long id) throws IOException;
}
