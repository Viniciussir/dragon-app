import { useState, useCallback } from "react";

const useFetchDragons = () => {
  const [dragons, setDragons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDragons = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon"
      );
      const data = await response.json();

      const dragonList = data.map((dragon) => ({
        id: dragon.id,
        createdAt: dragon.createdAt,
        name: dragon.name,
        type: dragon.type,
      }));
      setDragons(dragonList);
    } catch (err) {
      setError("Erro ao buscar dragões");
      console.error("Erro ao buscar dragões:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const saveDragon = async (dragonData, dragonId = null) => {
    setLoading(true);
    setError(null);

    const url = dragonId
      ? `http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${dragonId}`
      : "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon";
    const method = dragonId ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        body: JSON.stringify(dragonData),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        fetchDragons();
        return true;
      } else {
        throw new Error("Erro ao salvar o dragão");
      }
    } catch (err) {
      setError("Erro ao salvar o dragão");
      console.error("Erro ao salvar o dragão:", err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const deleteDragon = async (id) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`,
        { method: "DELETE" }
      );

      if (response.ok) {
        setDragons((prevDragons) =>
          prevDragons.filter((dragon) => dragon.id !== id)
        );
        return true;
      } else {
        throw new Error("Erro ao excluir o dragão");
      }
    } catch (err) {
      setError("Erro ao excluir o dragão");
      console.error("Erro ao excluir o dragão:", err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { dragons, fetchDragons, saveDragon, deleteDragon, loading, error };
};

export default useFetchDragons;
