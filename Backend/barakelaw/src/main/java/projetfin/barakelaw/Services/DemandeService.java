package projetfin.barakelaw.Services;

import org.springframework.stereotype.Service;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Models.Demande;

import java.util.List;

@Service
public interface DemandeService {
    public Demande addDemande(Demande demande);
    public Demande updateDemande(Demande demande, long id);
    public List<Demande> listeDemande(Etat etat);
    public void deleteDemande(long id);
    public Demande listeDemandeur(long id);
}
