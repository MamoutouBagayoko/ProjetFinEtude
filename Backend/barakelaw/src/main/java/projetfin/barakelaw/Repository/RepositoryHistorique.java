package projetfin.barakelaw.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Models.Demande;
import projetfin.barakelaw.Models.Historique;

import java.util.List;

@Repository
@CrossOrigin

public interface RepositoryHistorique extends JpaRepository<Historique,Long> {
    @Transactional
    @Modifying
    @Query("UPDATE Demande  SET etat='inactif' WHERE id=:id")
    void changerEtatDemande(@Param(value = "id") long id);
    List<Historique> findByEtat(Etat etat);

}
