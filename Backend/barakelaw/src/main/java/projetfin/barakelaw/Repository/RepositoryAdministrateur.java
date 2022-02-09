package projetfin.barakelaw.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Models.Administrateur;

import java.util.List;

@Repository
@Transactional
public interface RepositoryAdministrateur extends JpaRepository<Administrateur,Long> {
    Administrateur findOneByLoginAndMotpasse(String login,String motpasse);
    @Modifying
    @Query("UPDATE Administrateur  SET etat='inactif' WHERE id=:id")
    void changerEtatAdmin(@Param(value = "id") long id);
    List<Administrateur> findByEtat(Etat etat);
    // afficher un Admin par son id
    Administrateur findByIdAndEtat(long id,Etat etat);


}
