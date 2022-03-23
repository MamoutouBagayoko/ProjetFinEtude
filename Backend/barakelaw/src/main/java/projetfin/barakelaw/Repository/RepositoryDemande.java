package projetfin.barakelaw.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Models.Categorie;
import projetfin.barakelaw.Models.Demande;

import java.util.List;

@Repository
@CrossOrigin
@Transactional
public interface RepositoryDemande extends JpaRepository<Demande,Long> {
    @Modifying
    @Query("UPDATE Demande  SET etat='inactif' WHERE id=:id")
    void changerEtatDemande(@Param(value = "id") long id);
    List<Demande> findByEtat(Etat etat);
    @Modifying
    @Query("SELECT d FROM Demande d WHERE d.utilisateur.id=:id ORDER BY (d.id) DESC ")
    public List<Demande> listDemandeur(@Param("id") long id);
    //liste des demanduers

}
