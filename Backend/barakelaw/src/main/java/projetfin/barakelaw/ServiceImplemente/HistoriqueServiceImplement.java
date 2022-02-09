package projetfin.barakelaw.ServiceImplemente;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Models.Historique;
import projetfin.barakelaw.Repository.RepositoryHistorique;
import projetfin.barakelaw.Services.HistoriqueService;

import java.util.List;

@Service
public class HistoriqueServiceImplement implements HistoriqueService {
    @Autowired
    RepositoryHistorique repositoryHistorique;
    @Override
    public Historique addhistori(Historique hist) {
        return repositoryHistorique.save(hist);
    }

    @Override
    public Historique updateHist(Historique hist, long id) {
        Historique modHist=repositoryHistorique.findById(id).get();
        modHist.setDatehist(hist.getDatehist());
        modHist.setEtat(hist.getEtat());
        return repositoryHistorique.save(modHist) ;
    }

    @Override
    public List<Historique> listeHist(Etat etat) {
        return repositoryHistorique.findByEtat(Etat.actif);
    }


}
