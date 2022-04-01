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
import projetfin.barakelaw.Models.Personnel;
import projetfin.barakelaw.Models.Utilisateur;

import java.util.List;

@Repository
@CrossOrigin("*")
@Transactional
public interface RepositoryPersonnel extends JpaRepository<Personnel,Long> {
    @Modifying
    @Query("UPDATE Personnel  SET etat='inactif' WHERE id=:id")
    void changerEtatPerson(@Param(value = "id") long id);
    List<Personnel> findByEtat(Etat etat);
    // afficher un Personnel par son id
    Personnel findByIdAndEtat(long id,Etat etat);
    @Modifying
    @Query("SELECT p FROM Personnel p WHERE p.categorie.id= :id")
    public List<Personnel> listePersonnelByCategorie(@Param("id")long id);
    //liste personnel par etat inatif
   // public Personnel findById(long id);

}
