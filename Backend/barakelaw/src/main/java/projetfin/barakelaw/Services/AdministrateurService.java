package projetfin.barakelaw.Services;

import org.springframework.stereotype.Service;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Models.Administrateur;

import java.util.List;

@Service
public interface AdministrateurService {
    public Administrateur addAdmin(Administrateur admin);
    public Administrateur updateAdmin(Administrateur admin,long id);
    public List<Administrateur> liste(Etat etat);
    public void deleteAdmin(long id);
    //authentification
    public Administrateur authentification(String login, String motpasse);
    // afficher un Admin par son id
    public Administrateur adminParId(long id);
}
