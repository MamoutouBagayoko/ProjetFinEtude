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
import projetfin.barakelaw.Models.Utilisateur;

import java.util.List;

@Repository
@CrossOrigin("*")
public interface RepositoryUtilisateur extends JpaRepository<Utilisateur,Long> {
    @Transactional
    @Modifying
    @Query("UPDATE Utilisateur  SET etat='inactif' WHERE id=:id")
    void changerEtatUtilisateur(@Param(value = "id") long id);
    List<Utilisateur> findByEtat(Etat etat);
    // afficher un utilisateur par son id
    Utilisateur findByIdAndEtat(long id,Etat etat);
    //authentification
    Utilisateur findOneByLoginAndMotpass(String login,String motpass);
}
