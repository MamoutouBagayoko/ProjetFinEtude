package projetfin.barakelaw.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Enummer.Genre;
import projetfin.barakelaw.Enummer.Profile;

import javax.persistence.*;
import java.io.Serializable;
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor

public class Administrateur implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nom;
    private String prenom;
    private String email;
    private String login;
    @Enumerated(EnumType.STRING)
    private Genre genre;
    @Enumerated(EnumType.STRING)
    private Profile profit;
    private String motpasse;
    private String numphone;
    @Enumerated(EnumType.STRING)
    private Etat etat=Etat.actif;
    private Boolean supprimer = false;

}
