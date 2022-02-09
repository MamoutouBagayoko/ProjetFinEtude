package projetfin.barakelaw.Services;

import org.springframework.stereotype.Service;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Models.Historique;

import java.util.List;

@Service
public interface HistoriqueService {
    public Historique addhistori(Historique hist);
    public Historique updateHist(Historique hist, long id);
    public List<Historique> listeHist(Etat etat);
}
