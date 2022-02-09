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
import projetfin.barakelaw.Models.Utilisateur;

import java.util.List;

@Repository
@CrossOrigin("*")
public interface RepositoryCategorie extends JpaRepository<Categorie,Long> {
    @Transactional
    @Modifying
    @Query("UPDATE Categorie  SET etat='inactif' WHERE id=:id")
    void changerEtatCategorie(@Param(value = "id") long id);
    List<Categorie> findByEtat(Etat etat);
    // afficher un Categorie par son id
    Categorie findByIdAndEtat(long id,Etat etat);
}
