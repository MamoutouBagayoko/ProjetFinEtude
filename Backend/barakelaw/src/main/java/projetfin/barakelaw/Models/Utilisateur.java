package projetfin.barakelaw.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Enummer.Genre;
import projetfin.barakelaw.Enummer.Matrimoliale;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Utilisateur implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nom;
    private String prenom;
    private String pieceidentite;
    private String email;
    private String adresse;
    @Enumerated(EnumType.STRING)
    private Genre genre;
    private String numphone;
    @Enumerated(EnumType.STRING)
    private Matrimoliale matrimoliale;
    private String profession;
    private Number nbrenfant;
    private String motpass;
    private String login;
    @Enumerated(EnumType.STRING)
    private Etat etat = Etat.actif;
}
